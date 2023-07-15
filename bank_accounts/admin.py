from django.contrib import admin
from .models import BankAccountInfo
# Register your models here.

class MyModelAdmin(admin.ModelAdmin):
    readonly_fields = ("bank_account_number",)


admin.site.register(BankAccountInfo, MyModelAdmin)
