from rest_framework import serializers
from bank_accounts.models import BankAccountInfo
from crypto_wallets.models import CryptoWalletInfo
from users.models import NewUser
from django.db import transaction
from django.utils import timezone

import time
# ================================================================================================= 1

class CheckPlan1(serializers.ModelSerializer): # Used to check if user is already on a plan
    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):

        if instance.current_plan == 'One':
            raise serializers.ValidationError("PLAN ONE ALREADY ACTIVE!")
        elif instance.current_plan == 'Two':
            raise serializers.ValidationError("PLAN TWO ALREADY ACTIVE!")
        elif instance.current_plan == 'Three':
            raise serializers.ValidationError("PLAN THREE ALREADY ACTIVE!")

        # instance.current_plan = "One"
        instance.save()
        return instance


class DeductBankVal(serializers.ModelSerializer): # Deducts the amount required to activate the plan

    class Meta:
        model = BankAccountInfo
        fields = ('bank_account_balance', 'bank_account_number','user_bank_acc_id')   

    def update(self, instance, validated_data):

        instance.bank_account_balance = instance.bank_account_balance - 500
        instance.save()
        return instance


class IncreaseCryptoBalance(serializers.ModelSerializer): # Used to credit crypto wallet when plan terminates
       
    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')
  
    def update(self, instance, validated_data):
        def hash_function_one():
            value = 0
            reference_key = 1000 # number of hashes that equals to 1 COIN
            start_time = time.time()
            while time.time() - start_time < 5:
                value += 20
                time.sleep(0.00001)

            conversion = value / reference_key
            rounded_off_conversion = round(conversion, 2)
            return rounded_off_conversion
        
        # if instance.current_plan == 'One':
        #     raise serializers.ValidationError("Plan One already active!")
        # elif instance.current_plan == 'Two':
        #     raise serializers.ValidationError("Plan Two already active!")
        # elif instance.current_plan == 'Three':
        #     raise serializers.ValidationError("Plan Three already active!")

        value = "One"
        instance.current_plan = value
        print(f"Object ID before update: {instance.current_plan}")
        instance.save()

        instance.crypto_balance += hash_function_one()
        time.sleep(5)
        value_2 = "None"
        instance.current_plan = value_2

        instance.save()
        print(f"Object ID after update: {instance.current_plan}")

        return instance

# ================================================================================================= 2

class CheckPlan2(serializers.ModelSerializer): # Used to check if user is already on a plan
    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):

        if instance.current_plan == 'One':
            raise serializers.ValidationError("PLAN ONE ALREADY ACTIVE!")
        elif instance.current_plan == 'Two':
            raise serializers.ValidationError("PLAN TWO ALREADY ACTIVE!")
        elif instance.current_plan == 'Three':
            raise serializers.ValidationError("PLAN THREE ALREADY ACTIVE!")

        instance.save()
        return instance


class DeductBankVal_2(serializers.ModelSerializer):
    
    class Meta:
        model = BankAccountInfo
        fields = ('bank_account_balance', 'bank_account_number', 'user_bank_acc_id')   

    def update(self, instance, validated_data):
        
        instance.bank_account_balance = instance.bank_account_balance - 1000
        instance.save()
        return instance

class IncreaseCryptoBalance_2(serializers.ModelSerializer): # Used to credit crypto wallet when plan terminates
    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')
  
    def update(self, instance, validated_data):
        def hash_function_two():
            value = 0
            reference_key = 1000 # number of hashes that equals to 1 COIN
            start_time = time.time()
            while time.time() - start_time < 10:
                value += 40
                time.sleep(0.00001)

            conversion = value / reference_key
            rounded_off_conversion = round(conversion, 2)
            return rounded_off_conversion
        
        # if instance.current_plan == 'One':
        #     raise serializers.ValidationError("Plan One already active!")
        # elif instance.current_plan == 'Two':
        #     raise serializers.ValidationError("Plan Two already active!")
        # elif instance.current_plan == 'Three':
        #     raise serializers.ValidationError("Plan Three already active!")

        value = "Two"
        instance.current_plan = value
        print(f"Object ID before update: {instance.current_plan}")
        instance.save()

        instance.crypto_balance += hash_function_two()
        time.sleep(10)
        value_2 = "None"
        instance.current_plan = value_2

        instance.save()
        print(f"Object ID after update: {instance.current_plan}")

        return instance

# ================================================================================================= 3

class CheckPlan3(serializers.ModelSerializer): # Used to check if user is already on a plan
    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')

    def update(self, instance, validated_data):

        if instance.current_plan == 'One':
            raise serializers.ValidationError("PLAN ONE ALREADY ACTIVE!")
        elif instance.current_plan == 'Two':
            raise serializers.ValidationError("PLAN TWO ALREADY ACTIVE!")
        elif instance.current_plan == 'Three':
            raise serializers.ValidationError("PLAN THREE ALREADY ACTIVE!")

        instance.save()
        return instance


class DeductBankVal_3(serializers.ModelSerializer):
    
    class Meta:
        model = BankAccountInfo
        fields = ('bank_account_balance', 'bank_account_number', 'user_bank_acc_id')   

    def update(self, instance, validated_data):
        
        instance.bank_account_balance = instance.bank_account_balance - 2000
        instance.save()
        return instance

class IncreaseCryptoBalance_3(serializers.ModelSerializer): # Used to credit crypto wallet when plan terminates
    class Meta:
        model = CryptoWalletInfo
        fields = ('crypto_balance', 'crypto_wallet_id', 'current_plan', 'user_wallet_id_id')
  
    def update(self, instance, validated_data):
        def hash_function_three():
            value = 0
            reference_key = 1000 # number of hashes that equals to 1 COIN
            start_time = time.time()
            while time.time() - start_time < 20:
                value += 80
                time.sleep(0.00001)

            conversion = value / reference_key
            rounded_off_conversion = round(conversion, 2)
            return rounded_off_conversion
        
        # if instance.current_plan == 'One':
        #     raise serializers.ValidationError("Plan One already active!")
        # elif instance.current_plan == 'Two':
        #     raise serializers.ValidationError("Plan Two already active!")
        # elif instance.current_plan == 'Three':
        #     raise serializers.ValidationError("Plan Three already active!")

        value = "Three"
        instance.current_plan = value
        print(f"Object ID before update: {instance.current_plan}")
        instance.save()

        instance.crypto_balance += hash_function_three()
        time.sleep(20)
        value_2 = "None"
        instance.current_plan = value_2

        instance.save()
        print(f"Object ID after update: {instance.current_plan}")

        return instance


        

            
        



              
        
        
        


        
    
        