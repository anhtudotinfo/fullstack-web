from rest_framework import serializers
from .models import StatusLog

class CustomLogSerializer(serializers.ModelSerializer):

    class Meta:
        model = StatusLog
        fields = '__all__'