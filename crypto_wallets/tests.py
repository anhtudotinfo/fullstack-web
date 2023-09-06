from rest_framework.test import APITestCase, APIRequestFactory
from rest_framework import status
from django.urls import reverse
from users.models import NewUser
from .views import DisplayWalletInfo


# Create your tests here.

User = NewUser

class TestGetWalletInfo(APITestCase):

    def setUp(self):

        self.view = DisplayWalletInfo.as_view()
        self.user = NewUser.objects.create(email='aaa@email.com', password='password123!', user_name='testperson', id=100)
        self.client.force_login(self.user)

    def test_wallet_view(self):

        url = reverse('crypto_wallets:displaywalletinfo')
        request = self.client.get(url)
        self.assertEqual(request.status_code, status.HTTP_200_OK)