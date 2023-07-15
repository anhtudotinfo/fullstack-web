from django.urls import path
from .views import DisplayWalletInfo

app_name = 'crypto_wallets'

urlpatterns = [

    path('wallets/view', DisplayWalletInfo.as_view(), name='displaywalletinfo'),

]