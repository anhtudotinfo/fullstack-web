# fullstack-web
# Fullstack API Web Development Project

- Back-end: Django REST Framework 
- Front-end: React.js

## Æ Power Platform 

Description: This project is a crypto-mining and e-commerce platform. It simulates crypto-mining functionalities by using generative mathematical functions using Python. Key features is to allow users to register on the platform and mine crypto safely and securely.
Users can use their crypto to buy microtransactions on the E-Store in the app. These microtransaction codes are available to them in the Inbox. The platform also features a dedicated chatbot that helps users if they have any questions.

Python package requirements: 

(Python 3.10)
* Django==4.1.3
* djangorestframework==3.14.0
* django-cors-headers==3.13.0
* djangorestframework-simplejwt==5.2.2
* nltk==3.8.1
* whitenoise==6.2.0
* cryptography==39.0.0

Note -> The nltk library is a discrete package installer which means it installs and uses its own libraries. You have to run nltk.download() from a Python terminal or in a Python script file if the nltk library requires you to do so and download the neccesary packages needed.

* To start Django server use: manage.py runserver and to start the front-end Node(React) server use: npm start

* For the Node packages/libraries please see the package.lock and package json files in the web_frontend folder.

#### Superuser details:
  akash@email.com 
  password123
  
####  User details:
  user3@email.com
  testpass123

  
##### Things to note:

- Small bug on front-end using Axios when you it tries to refresh the user access token it goes into an infinite loop, to reset this please restart both the back-end Django server and the Front-end Node(React) server. 

## Preview of the front-end landing page:

![Capture_preview](https://github.com/akash93-cpu/fullstack-web/assets/78371200/51a8d141-35f5-4925-9d01-1cb13007857d)
