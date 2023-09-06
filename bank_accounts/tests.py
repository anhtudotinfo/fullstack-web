from rest_framework.test import APITestCase, APIRequestFactory
from rest_framework import status
from django.urls import reverse
from .views import DisplayBankAccountInfo
from users.models import NewUser

# Create your tests here.

User = NewUser

class TestDisplayAccountInfo(APITestCase):

    def setUp(self):

        # self.factory = APIRequestFactory()
        self.view = DisplayBankAccountInfo.as_view()
        self.user = NewUser.objects.create(email='aaa@email.com', password='password123!', user_name='testperson', id=100)
        self.client.force_login(self.user)

    def test_get_account_info(self):
        url = reverse('bank_accounts:displaybankaccountinfo')
        request = self.client.get(url)
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        
class TestDepositAmountByUser(APITestCase): 

    def setUp(self):

        self.user = NewUser.objects.create(email='bbb@email.com', password='password1234!', user_name='testuser', id=200)
        self.client.force_login(self.user)

    def test_user_deposit_pass(self): # Test to pass -> when value <= 1500

        url = reverse('bank_accounts:depositamount', args=[self.user.id])
        request = self.client.put(url, {"bank_account_balance": 1500}) # @ 1 of 2 requests per day
        self.assertEqual(request.status_code, status.HTTP_200_OK)
        
    def test_user_deposit_fail(self): # Test to fail -> when value > 1500

        url = reverse('bank_accounts:depositamount', args=[self.user.id])
        request_failed_attempt = self.client.put(url, {"bank_account_balance": 1501}) # @ 2 of 2 requests per day
        self.assertEqual(request_failed_attempt.status_code, status.HTTP_400_BAD_REQUEST)