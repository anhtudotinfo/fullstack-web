from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Inbox
from .serializers import InboxSerializer
# Create your views here.

class MyInbox(generics.ListAPIView):

    permission_classes = [IsAuthenticated]

    serializer_class = InboxSerializer

    def get_queryset(self):
        
        return Inbox.objects.filter(user=self.request.user)
        
