from django.contrib import admin
from .models import Inbox

# Register your models here.

class MyInbox(admin.ModelAdmin):

    list_display = ('id', 'user_id', 'code')
    
admin.site.register(Inbox, MyInbox)