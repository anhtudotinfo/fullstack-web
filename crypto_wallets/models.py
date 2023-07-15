from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from django.core.validators import MinValueValidator
from django.utils.crypto import get_random_string

# Create your models here.

class CryptoWalletInfo(models.Model):
    
    def generate_id():
        unique_id = get_random_string(10)
        return unique_id

    user_wallet_id = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='wallet', primary_key=True)
    crypto_wallet_id = models.CharField(default=generate_id, unique=True, editable=False, primary_key=False, max_length=10)
    crypto_balance = models.FloatField(default=0.0, validators=[MinValueValidator(0.0)])
    current_plan = models.CharField(max_length=32, default='None')

@receiver(post_save, sender = settings.AUTH_USER_MODEL)
def create_crypto_wallet(sender, instance, created, **kwargs):
    if created:
        CryptoWalletInfo.objects.create(user_wallet_id=instance)

