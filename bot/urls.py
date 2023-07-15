from django.urls import path
from . import views

app_name = 'bot'

urlpatterns = [
    path('chatbot/', views.chatbot, name='chatbot'), 
]