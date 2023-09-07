from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from users.models import NewUser
from bank_accounts.models import BankAccountInfo


# Create your tests here.

user = NewUser

class TestPlanOne(APITestCase):

    def setUp(self):

        self.user = NewUser.objects.create(email='ccc@email.com', password='password1234!', user_name='cperson', id=100)
        self.bank_account_add_balance = BankAccountInfo.objects.update(bank_account_balance=500)
        self.client.force_login(self.user)


    def test_plan_one(self):
        
        url_main = reverse('crypto_plans:crypto_plan_one', args=[self.user.id]) # Deducts 500 from bank account
        request = self.client.put(url_main, {})
        self.assertEqual(request.status_code, status.HTTP_200_OK)


# class TestPlanTwo(APITestCase): # NOT REQUIRED!

#     def setUp(self):

#         self.user = NewUser.objects.create(email='dcc@email.com', password='password1234!', user_name='dperson', id=1)
#         self.client.force_login(self.user)

#     def test_plan_two(self):

#         url_insert = reverse('bank_accounts:depositamount', args=[self.user.id])
#         request_insert = self.client.put(url_insert, {"bank_account_balance": 1000})

#         url_main = reverse('crypto_plans:crypto_plan_two', args=[self.user.id])
#         request = self.client.put(url_main, {})
#         self.assertEqual(request.status_code, status.HTTP_200_OK)


# class TestPlanThree(APITestCase): # NOT REQUIRED!!! 

#     def setUp(self):

#         self.user = NewUser.objects.create(email='ccc@email.com', password='password1234!', user_name='cperson', id=100)
#         self.client.force_login(self.user)

#     def test_plan_three(self):


#         url_main = reverse('crypto_plans:crypto_plan_three', args=[self.user.id])
#         request = self.client.put(url_main, {})
#         self.assertEqual(request.status_code, status.HTTP_200_OK)
    

    # def sample_test_plan(self): # USED AS REFERENCE 

    #     url_insert = reverse('bank_accounts:depositamount', args=[self.user.id]) # Used to insert required amount into user's bank account 
    #     request_insert = self.client.put(url_insert, {"bank_account_balance": 2000})

    #     url_main = reverse('crypto_plans:crypto_plan_three', args=[self.user.id]) # Deducts 2000 from bank account
    #     request = self.client.put(url_main, {})
    #     self.assertEqual(request.status_code, status.HTTP_200_OK)