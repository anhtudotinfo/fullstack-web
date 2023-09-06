from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from users.models import NewUser
from .models import Products
from crypto_wallets.models import CryptoWalletInfo

# Create your tests here.


class TestProductsList(APITestCase):

    def setUp(self):

        self.user = NewUser.objects.create(email='ttt@email.com', password='password1234!', user_name='tperson', id=2)
        self.products = Products.objects.create(product_id=12345, product_desc="Description", price=50.0, product_title="Some Title")
        self.client.force_login(self.user)

    def test_get_product(self):

        url = reverse('products:display-all-products')
        request = self.client.get(url)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        

class TestPurchaseProduct_Allow(APITestCase): # This test is used to allow user of purchase request when crypto_balance >= price

    def setUp(self):

        self.user = NewUser.objects.create(email='ttt@email.com', password='password1234!', user_name='tperson', id=2)
        self.products = Products.objects.create(product_id=12345, product_desc="Description", price=10.0, product_title="Some Title")
        self.crypto = CryptoWalletInfo.objects.update(crypto_balance=50.0)
        self.client.force_login(self.user)

    def test_purchase_product(self):

        url = reverse('products:purchase-product', args=[self.user.id])
        request = self.client.put(url, {})
        self.assertEqual(request.status_code, status.HTTP_202_ACCEPTED)


class TestPurchaseProduct_Deny(APITestCase): # This test is used to deny user of request when crypto_balance < price

    def setUp(self):

        self.user = NewUser.objects.create(email='ttt@email.com', password='password1234!', user_name='tperson', id=2)
        self.products = Products.objects.create(product_id=12345, product_desc="Description", price=10.0, product_title="Some Title")
        self.crypto = CryptoWalletInfo.objects.update(crypto_balance=5.0)
        self.client.force_login(self.user)

    def test_purchase_product(self):

        url = reverse('products:purchase-product', args=[self.user.id])
        request = self.client.put(url, {})
        self.assertEqual(request.status_code, status.HTTP_400_BAD_REQUEST)