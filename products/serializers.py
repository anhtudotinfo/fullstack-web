from rest_framework import serializers
from .models import Products
from crypto_wallets.models import CryptoWalletInfo
from inbox.models import Inbox

from django.utils.crypto import get_random_string

class AllProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

# ================================================================================================

class PurchaseProductSerializer(serializers.ModelSerializer):

    # Used to get a random product and check if user has required crypto 

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product_pk():

            product = Products.objects.order_by('?').first()
            return product.price
        
        product_price = get_product_pk()
        
        if product_price > instance.crypto_balance:
            raise serializers.ValidationError("Crypto wallet balance too low!")
        
        instance.crypto_balance -= product_price
        instance.save()
        return instance

class GenerateCodeSerializer(serializers.ModelSerializer): 

    # Used to generate a code and insert into user's inbox

    user = serializers.IntegerField(required=False)
    code = serializers.CharField(required=False)

    class Meta:
        model = Inbox
        fields = ('user', 'code', 'id')
        required_fields = []



    def create(self, request, *args, **kwargs):

        def generate_code():

            unique_code = get_random_string(12)
            return unique_code

        user_id = self.context['user_id']
        new = Inbox.objects.create(user_id =user_id, code = generate_code())
        new.save()
        return new


