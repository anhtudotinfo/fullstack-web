from django.urls import path
from .views import DisplayAllUserPlanLogs

app_name = 'custom_logs'

urlpatterns = [
    path('logs/view', DisplayAllUserPlanLogs.as_view(), name='displayalluserplanlogs'),
]