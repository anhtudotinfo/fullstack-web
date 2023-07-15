from django.contrib import admin
from .models import StockMarketExchange

# Register your models here.

class MyModelAdminStockMarket(admin.ModelAdmin):
    readonly_fields = ('day', 'crypto_usd_rate')

admin.site.register(StockMarketExchange, MyModelAdminStockMarket)