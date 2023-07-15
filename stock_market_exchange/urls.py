from django.urls import path
from .views import ConvertCryptoToUSD, DisplayAllStockMarketData

app_name = 'stock_market_exchange'

urlpatterns = [
    path('stock-market-exchange/convert/<int:pk>/', ConvertCryptoToUSD.as_view(), name='convert-crypto-to-usd'),
    path('stock-market-exchange/display-all-data/', DisplayAllStockMarketData.as_view(), name='display-all')
]