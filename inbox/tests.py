from rest_framework.test import APITestCase
from rest_framework.status import HTTP_200_OK
from django.urls import reverse
from users.models import NewUser
from .models import Inbox

# Create your tests here.


user = NewUser

class TestDisplayAllMessages(APITestCase):

    def setUp(self):

        self.user = NewUser.objects.create(email='vvv@email.com', password='password1234!', user_name='vperson', id=3)
        self.inbox = Inbox.objects.update(code='sl20swt51s21')
        self.client.force_login(self.user)

    def test_get_inbox_message(self):

        url = reverse('inbox:my-inbox')
        request = self.client.get(url)
        self.assertEqual(request.status_code, HTTP_200_OK)