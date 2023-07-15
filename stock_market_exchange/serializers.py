from rest_framework import serializers
from .models import StockMarketExchange
from crypto_wallets.models import CryptoWalletInfo
from bank_accounts.models import BankAccountInfo
from django.shortcuts import render

class StockMarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockMarketExchange
        fields = '__all__'

# ================================================================================================

class A(serializers.ModelSerializer):
    
    class Meta:
        model = BankAccountInfo
        fields = ('bank_account_balance', 'bank_account_number','user_bank_acc_id')
    
    def update(self, instance, validated_data):

        def calculation_conversion(pk):
            
            last_entry = StockMarketExchange.objects.last()
            l = last_entry.crypto_usd_rate
            
            user_c = CryptoWalletInfo.objects.get(user_wallet_id_id=pk)
            i = user_c.crypto_balance

            calculation = l * i
            return int(calculation)
        
        
        instance.bank_account_balance += calculation_conversion(instance.user_bank_acc_id)
        instance.save()
        return instance

class B(serializers.ModelSerializer): # To set the current user's crypto wallet value to 0.0

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        instance.crypto_balance = 0.0
        instance.save()
        return instance

