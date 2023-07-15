from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .serializers import A, B, StockMarketSerializer
from crypto_wallets.models import CryptoWalletInfo
from bank_accounts.models import BankAccountInfo
from .models import StockMarketExchange

# Create your views here.

class DisplayAllStockMarketData(generics.ListAPIView):

    # Displays all stock market exchange rate data

    permission_classes = [IsAuthenticated]
    serializer_class = StockMarketSerializer
    queryset = StockMarketExchange.objects.all()
    

class ConvertCryptoToUSD(APIView):

    # This will convert user's crypto amount to U$D based on current exchange rate
    
    throttle_scope = 'low'
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        a = BankAccountInfo.objects.get(pk=pk)
        b = CryptoWalletInfo.objects.get(pk=pk)
        one = A(instance=a, data=request.data)
        two = B(instance=b, data=request.data)
        if one.is_valid() and two.is_valid():
            one.save()
            two.save()
            return Response({'message': 'converted!'}, status=status.HTTP_200_OK)
        else:
            return Response(one.errors or two.errors, status=status.HTTP_400_BAD_REQUEST)