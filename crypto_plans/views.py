from django.shortcuts import render
from rest_framework.generics import UpdateAPIView, GenericAPIView
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, BasePermission, IsAdminUser
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
import logging

from .serializers import (IncreaseCryptoBalance, 
                          DeductBankVal, 
                          DeductBankVal_2, 
                          IncreaseCryptoBalance_2, 
                          DeductBankVal_3, 
                          IncreaseCryptoBalance_3, 
                          CheckPlan1 ,
                          CheckPlan2 , 
                          CheckPlan3)

from crypto_wallets.models import CryptoWalletInfo
from bank_accounts.models import BankAccountInfo
import time
from datetime import datetime

# Create your views here.

class PlanOne(APIView):
    
    permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     user = self.request.user
    #     if not user.is_anonymous:
    #         return CryptoWalletInfo.objects.filter(user_wallet_id_id=user)
    
    def put(self, request, pk):
        
        current_user = request.user.id
        db_logger = logging.getLogger('db')

        a = BankAccountInfo.objects.get(pk=pk)
        b = CryptoWalletInfo.objects.get(pk=pk)
        first = CheckPlan1(instance=b, data=request.data)
        second = DeductBankVal(instance=a, data=request.data)
        third = IncreaseCryptoBalance(instance=b, data=request.data)
        if first.is_valid() and second.is_valid() and third.is_valid():

            first.save()
            second.save()
            third.save()
            db_logger.info('User Plan 1 activated', extra={'user': current_user})

            return Response({'message': 'success!'}, status=status.HTTP_200_OK)
        else:
            return Response(first.errors or second.errors or third.errors, status=status.HTTP_400_BAD_REQUEST)


    
class PlanTwo(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        current_user = request.user.id
        db_logger = logging.getLogger('db') 

        c = BankAccountInfo.objects.get(pk=pk)
        d = CryptoWalletInfo.objects.get(pk=pk)
        first_2 = CheckPlan2(instance=d, data=request.data)
        second_2 = DeductBankVal_2(instance=c, data=request.data)
        third_2 = IncreaseCryptoBalance_2(instance=d, data=request.data)
        if first_2.is_valid() and second_2.is_valid() and third_2.is_valid():

            first_2.save()
            second_2.save()
            third_2.save()
            db_logger.info('User Plan 2 activated', extra={'user': current_user})

            return Response({'message_2': 'success!'}, status=status.HTTP_200_OK)
        else:
            return Response(first_2.errors or second_2.errors or third_2.errors, status=status.HTTP_400_BAD_REQUEST)
        


class PlanThree(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):

        current_user = request.user.id
        db_logger = logging.getLogger('db')
        
        e = BankAccountInfo.objects.get(pk=pk)
        f = CryptoWalletInfo.objects.get(pk=pk)
        first_3 = CheckPlan3(instance=f, data=request.data)
        second_3 = DeductBankVal_3(instance=e, data=request.data)
        third_3 = IncreaseCryptoBalance_3(instance=f, data=request.data)
        if first_3.is_valid() and second_3.is_valid() and third_3.is_valid():

            first_3.save()
            second_3.save()
            third_3.save()      
            db_logger.info('User Plan 3 activated', extra={'user': current_user})

            return Response({'message_3': 'success!'}, status=status.HTTP_200_OK)
        else:
            return Response(first_3.errors or second_3.errors or third_3.errors, status=status.HTTP_400_BAD_REQUEST)