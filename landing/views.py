from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated
from .models import HomePage
from .serializers import HomeSerializer
import logging

# Create your views here.

class HomeView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]

    queryset = HomePage.objects.all()
    serializer_class = HomeSerializer

    # def loggers(self, request):
    #     current_user = request.user.id
    #     db_logger = logging.getLogger('db')
    #     db_logger.info('INFORMATION MESSAGE ON LANDING PAGE!', extra={'user': current_user})

    # def get(self, request, *args, **kwargs):
    #     self.loggers(request)
    #     return super().get(request, *args, **kwargs)