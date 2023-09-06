from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework import status
from django.urls import reverse
from users.models import NewUser
from .models import StockMarketExchange
from crypto_wallets.models import CryptoWalletInfo

# Create your tests here.

user = NewUser

class TestDisplayStockMarketData(APITestCase):

    def setUp(self):

        self.user = NewUser.objects.create(email='ccc@email.com', password='password1234!', user_name='cperson', id=100)
        self.client.force_login(self.user)

    def test_get_stock_market_data(self):

        url = reverse('stock_market_exchange:display-all')
        request = self.client.get(url)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        
class TestConvertCryptoToUSD(APITestCase):

    def setUp(self):

        self.user = NewUser.objects.create(email='ccc@email.com', password='password1234!', user_name='cperson', id=100)
        self.cc = StockMarketExchange.objects.create(crypto_usd_rate=10, day=1)
        self.last = self.cc.crypto_usd_rate
        self.client.force_login(self.user)

    def test_convert_crypto_to_usd(self):
        
        url = reverse('stock_market_exchange:convert-crypto-to-usd', args=[self.user.id])
        request = self.client.put(url, {})
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        