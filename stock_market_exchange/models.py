from django.db import models

# Create your models here.

class StockMarketExchange(models.Model):

    day = models.IntegerField(default=0, primary_key=True)
    crypto_usd_rate = models.FloatField(default=0)
