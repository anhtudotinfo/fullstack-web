from django.shortcuts import render
from rest_framework import generics
from .models import CryptoWalletInfo
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, BasePermission, IsAdminUser
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import permissions
from .serializers import CryptoWalletSerializer
from rest_framework.response import Response

# Create your views here.

class DisplayWalletInfo(generics.ListAPIView):

    permission_classes = [IsAuthenticated]

    serializer_class = CryptoWalletSerializer

    def get_queryset(self):
        user = self.request.user
        if not user.is_anonymous:
            return CryptoWalletInfo.objects.filter(user_wallet_id=user)

