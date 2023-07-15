from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
# from random import randint, randrange
import random
import time

# Create your models here.

random.seed()

class BankAccountInfo(models.Model):

    def generate():
        random.seed(time.time())
        return random.randint(9999, 99999)

    user_bank_acc = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile', primary_key=True)
    bank_account_number = models.IntegerField(default=generate, unique=True, editable=False)
    bank_account_balance = models.PositiveIntegerField(default=0)
    

@receiver(post_save , sender=settings.AUTH_USER_MODEL)
def create_user_bank_profile(sender, instance, created, **kwargs):
    if created:
        BankAccountInfo.objects.create(user_bank_acc=instance)

# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def save_user_bank_profile(sender, instance, **kwargs):
#     instance.profile.save()

