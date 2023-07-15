from django.contrib import admin
from .models import Products

# Register your models here.

class MyModelProducts(admin.ModelAdmin):
    readonly_fields = ('price', 'product_id',)

admin.site.register(Products, MyModelProducts)