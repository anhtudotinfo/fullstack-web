from django.urls import path
from .views import MyInbox

app_name = 'inbox'

urlpatterns = [
    path('inbox/view/', MyInbox.as_view(), name='my-inbox'),
]