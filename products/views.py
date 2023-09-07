from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Products
from .serializers import (AllProductsSerializer, PurchaseProductSerializer, GenerateCodeSerializer, Serializer205684, 
                          Serializer256004, Serializer265771,Serializer321549, Serializer321892, Serializer326881, Serializer355840,
                          Serializer358621, Serializer512025, Serializer516852, Serializer564895, Serializer568703, Serializer569533, 
                          Serializer684321, Serializer688410, Serializer820034, Serializer831562, Serializer843056, Serializer844321, 
                          Serializer910240, Serializer922640, Serializer922681, Serializer991330, Serializer993546, Serializer994668)
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
        
# ================================================================================================ ALL INDIVIDUAL PURCHASE VIEWS

class Purchase205684(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer205684(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase256004(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer256004(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)


class Purchase265771(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer265771(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase321549(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer321549(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase321892(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer321892(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase326881(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer326881(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase355840(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer355840(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase358621(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer358621(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase512025(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer512025(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase516852(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer516852(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase564895(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer564895(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase568703(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer568703(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase569533(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer569533(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase684321(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer684321(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase688410(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer688410(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase820034(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer820034(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase831562(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer831562(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase843056(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer843056(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase844321(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer844321(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase910240(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer910240(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        

class Purchase922640(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer922640(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase922681(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer922681(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase991330(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer991330(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase993546(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer993546(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)
        
class Purchase994668(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        e = CryptoWalletInfo.objects.get(pk=pk)
        ee = Serializer994668(instance=e, data=request.data)
        o = GenerateCodeSerializer(data=request.data, context={'user_id': request.user.id})

        if ee.is_valid() and o.is_valid():
            ee.save()
            o.save()
            return Response({'message': 'SUCCESS!'}, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(ee.errors or o.errors, status=status.HTTP_400_BAD_REQUEST)