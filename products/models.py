from django.db import models

# Create your models here.
class Products(models.Model):
    
    product_id = models.IntegerField(default=0, primary_key=True, unique=True)
    product_desc = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    product_title = models.CharField(max_length=50)
