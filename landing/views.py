from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated
from .models import HomePage
from .serializers import HomeSerializer

# Create your views here.

class HomeView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]

    queryset = HomePage.objects.all()
    serializer_class = HomeSerializer
