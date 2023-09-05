from rest_framework.test import APITestCase, APIRequestFactory
from rest_framework import status
from django.urls import reverse
from .views import HomeView
from users.models import NewUser
# Create your tests here.

User = NewUser

class TestView(APITestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = HomeView.as_view()
        self.url = reverse('landing')
        self.user = NewUser.objects.create(
            email = 'test@email.com',
            user_name = 'TestPerson',
            password = 'password1234!'
        )
    
    def test_view(self):

        request = self.factory.get(self.url)
        request.user = self.user
        response = self.view(request)

        self.assertEquals(response.status_code, status.HTTP_200_OK)
