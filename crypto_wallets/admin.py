from django.contrib import admin
from .models import CryptoWalletInfo

# Register your models here.

class MyModelAdminCrpyto(admin.ModelAdmin):
    readonly_fields = ("crypto_wallet_id", "current_plan",)

admin.site.register(CryptoWalletInfo, MyModelAdminCrpyto)
