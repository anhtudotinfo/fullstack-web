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

# ================================================================================================ ALL ITEMS! START HERE

class Serializer205684(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=205684)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
        

class Serializer256004(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=256004)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer265771(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=265771)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer321549(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=321549)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer321892(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=321892)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance


class Serializer326881(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=326881)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer355840(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=355840)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer358621(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=358621)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer512025(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=512025)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer516852(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=516852)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer564895(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=564895)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer568703(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=568703)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer569533(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=569533)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer684321(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=684321)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer688410(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=688410)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer820034(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=820034)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer831562(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=831562)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer843056(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=843056)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer844321(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=844321)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer910240(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=910240)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer922640(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=922640)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer922681(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=922681)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer991330(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=991330)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    
class Serializer993546(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=993546)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance
    

class Serializer994668(serializers.ModelSerializer):

    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):
        
        def get_product():
            c = Products.objects.get(product_id=994668)
            cw = c.price
            return cw
        
        ce = get_product()

        if instance.crypto_balance < ce:
            raise serializers.ValidationError("TOO LOW BALANCE!")
        
        instance.crypto_balance -= ce
        instance.save()
        return instance

# ================================================================================================ ENDS
