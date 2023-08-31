from django.shortcuts import render
from rest_framework import generics
from .models import StatusLog
from rest_framework.permissions import IsAuthenticated
from .serializers import CustomLogSerializer

# Create your views here.

class DisplayAllUserPlanLogs(generics.ListAPIView):

    permission_classes = [IsAuthenticated]

    serializer_class = CustomLogSerializer

    def get_queryset(self):
        return StatusLog.objects.filter(user=self.request.user.id).order_by('-create_datetime')[:10]