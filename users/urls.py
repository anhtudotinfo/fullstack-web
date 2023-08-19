from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, UserInfoView

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name='create_user'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
    path('user-info/<int:pk>/', UserInfoView.as_view(), name='user-info'),
    
]