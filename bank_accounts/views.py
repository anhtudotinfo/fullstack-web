from django.shortcuts import render
from rest_framework import generics
from .models import BankAccountInfo
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, BasePermission, IsAdminUser
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import permissions
from .serializers import BankAccountSerializer
from rest_framework import serializers
from rest_framework.response import Response

# Create your views here.


# class MonthlyThrottle(BaseThrottle): 
# 30 day time-out interval
#     def allow_request(self, request, view):
#         user = request.user
#         if user.is_authenticated:
#             timestamp = timezone.now().strftime('%Y-%m')
#             key = f'monthly-{user.pk}-{timestamp}'
#             usage = cache.get(key, 0)
#             if usage >= 2:
#                 return False
#             cache.set(key, usage + 1, 31 * 24 * 60 * 60)
#         return True
    
#     def wait(self):
#         return 0
        

class DepositIncrease(serializers.ModelSerializer):
    class Meta:
        model = BankAccountInfo
        fields = ('bank_account_balance', 'bank_account_number', 'user_bank_acc_id')

    def validate_bank_account_balance(self, value): # used to verify user deposit amount does not exceed $1500

        if value > 1500:
            raise serializers.ValidationError("Error! Value cannot exceed a maximum of 1500! If you try to add an amount exceeding 1500 - this will trigger the time-out interval and you will not be able to add any more funds!")
        return value

    def update(self, instance, validated_data): # used to increase current value of bank account balance
        instance.bank_account_balance += validated_data.get('bank_account_balance', 0)
        instance.save()
        return instance
    
class DisplayBankAccountInfo(generics.ListAPIView):

    permission_classes = [IsAuthenticated]

    serializer_class = BankAccountSerializer

    # queryset = BankAccountInfo.objects.filter(user_bank_acc_id=86).only('bank_account_number')
    def get_queryset(self):
            user = self.request.user
            if not user.is_anonymous:
                return BankAccountInfo.objects.filter(user_bank_acc_id=user)

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.user_bank_acc == request.user

class UserDepositAmount(generics.RetrieveUpdateAPIView, IsOwnerOrReadOnly):

    # FRONT-END: Please note -> Max. limit = $1500. 
    # If you attempt to add an amount exceeding $1500 - this will trigger the time-out interval and you will not be able to add any more! 

    throttle_scope = 'low'
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    serializer_class = BankAccountSerializer

    def put(self, request, pk):

        instance = BankAccountInfo.objects.get(pk=pk)
        serializer = DepositIncrease(instance, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
  
    def get_queryset(self):
        
        user = self.request.user
        if not user.is_anonymous:
            return BankAccountInfo.objects.filter(user_bank_acc_id=user)
    
        
        
    
            
            
