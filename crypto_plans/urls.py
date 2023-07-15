from django.urls import path
from .views import PlanOne, PlanTwo, PlanThree

app_name = 'crypto_plans'

urlpatterns = [

    path('plans/one/<int:pk>/', PlanOne.as_view(), name='crypto_plan_one'), 
    path('plans/two/<int:pk>/', PlanTwo.as_view(), name='crypto_plan_two'),
    path('plans/three/<int:pk>/', PlanThree.as_view(), name='crypto_plan_three'),
]