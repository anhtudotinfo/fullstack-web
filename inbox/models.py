from django.db import models
from django.conf import settings

# Create your models here.

class Inbox(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='inbox')
    code = models.CharField(max_length=12, unique=True)

    def __int__(self):
        return self.user
