from rest_framework import serializers
from .models import CryptoWalletInfo

class CryptoWalletSerializer(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ("user_wallet_id", "crypto_wallet_id", "crypto_balance", "current_plan")