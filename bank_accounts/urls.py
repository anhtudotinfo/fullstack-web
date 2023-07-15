from django.urls import path
from .views import DisplayBankAccountInfo, UserDepositAmount

app_name = 'bank_accounts'

urlpatterns = [

    path('bank-accounts/view', DisplayBankAccountInfo.as_view(), name='displaybankaccountinfo'),
    path('bank-accounts/edit/<int:pk>/', UserDepositAmount.as_view(), name='depositamount'),

]