"""web_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/', include('landing.urls')),

    path('api/user/', include('users.urls', namespace='users')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include('bank_accounts.urls', namespace='displaybankaccountinfo')),
    path('api/', include('crypto_wallets.urls', namespace='displaywalletinfo')),

    path('api/', include('crypto_plans.urls', namespace='cryptoplans')),

    path('api/', include('stock_market_exchange.urls', namespace='stockmarketexchange')),

    path('api/', include('products.urls', namespace='products')),

    path('api/', include('inbox.urls', namespace='inbox')),

    path('api/', include('bot.urls', namespace='bot')),

    path('api/', include('custom_logs.urls', namespace='custom_logs')),
    

    path('admin/', admin.site.urls),
]
