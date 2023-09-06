from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory
from rest_framework import status
from django.urls import reverse
from .views import CustomUserCreate, UserInfoView
from .models import NewUser

User = NewUser

# Create your tests here.

class TestCreateUser(APITestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = CustomUserCreate.as_view()
        self.url = 'create/'
        
    def test_user_create(self):

        sample_data = {
            "email": 'testperson@email.com',
            "user_name": "testperson",
            "password": "password1234!"
        }
        
        request = self.factory.post(self.url, sample_data)
        response = self.view(request)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

class TestUserInfo(APITestCase):
    
    def setUp(self):

        # self.factory_2 = APIRequestFactory()
        # self.view = UserInfoView.as_view()
        # self.url = 'user-info/'
        self.user = NewUser.objects.create(email='aaa@email.com', password='password123!', user_name='aaa', id=100)
        self.client.force_login(self.user)
        
    def test_user_get_info(self):
        url = reverse('users:user-info', args=[self.user.id])
        request_2 = self.client.get(url)
        self.assertEqual(request_2.status_code, status.HTTP_200_OK)