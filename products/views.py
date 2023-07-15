from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Products
from .serializers import AllProductsSerializer, PurchaseProductSerializer, GenerateCodeSerializer

from crypto_wallets.models import CryptoWalletInfo
from inbox.models import Inbox

from django.shortcuts import get_object_or_404


# Create your views here.

class DisplayAllProducts(generics.ListAPIView):

    # Displays all products

    permission_classes = [IsAuthenticated]
    serializer_class = AllProductsSerializer
    queryset = Products.objects.all()

class ProductDetail(generics.RetrieveAPIView):

    # Displays one product by pk

    permission_classes = [IsAuthenticated]

    serializer_class = AllProductsSerializer

    queryset = Products.objects.filter()

class PurchaseView(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        q = CryptoWalletInfo.objects.get(pk=pk)
        i = PurchaseProductSerializer(instance=q, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})
        if i.is_valid() and o.is_valid():
            i.save()
            o.save()
            return Response({'message': 'Purchase Successful!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(i.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)


