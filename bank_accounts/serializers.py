from rest_framework import serializers
from .models import BankAccountInfo
from django.conf import settings
    
class BankAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = BankAccountInfo
        fields = ('bank_account_balance', 'user_bank_acc_id', 'bank_account_number')


        