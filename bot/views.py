from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from nltk.corpus import wordnet as wn

# Create your views here.

lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))
# wn.ensure_loaded()

@api_view(['POST', 'GET'])
def chatbot(request):

    if request.method == 'GET':
        response_a = """Hello! My name is Varana! I'm the integrated bot of this platform. Type 'help' for a list of available options. 
        Use of correct punctuation is advised."""
        return Response({'message': response_a})

    message = request.data['message']

    words = nltk.word_tokenize(message.lower())

    words = [word for word in words if word not in stop_words]

    words = [lemmatizer.lemmatize(word) for word in words]

    # response = 'Hello, how can I help you?'

    if 'help' in words:
        response = """I'm glad you asked for help! Here are some of the options/commands available: 
        1. Crypto-mining (Æ-Coin)
        2. Stock Market Exchange
        3. E-Store (Microtransactions)
        If you would like information on a specific topic from the above - please type in 1, 2 or 3 from the above."""

    # elif 'love' in words:
    #     response = 'I am happy to see this from you!'

    elif 'hey' in words:
        response = 'Hi! ;)'

    elif 'problem' in words:
        response = 'If you encounter any problems on this platform please feel free to contact us!'

    # elif 'hate' in words:
    #     response = "I'm very sorry to see that you are experiencing this :( We really strive ourselves to deliver exceptional value."
    
    elif '1' in words:
        response = """Crypto-mining: This is a process of validating and recording transactions on the Æ-Coin network.
        The main purpose is to validate transactions to prevent fraud and adding new blocks to the blockchain. This platform    
        offers the user three plans for mining Æ-Coin. Once you activate a plan - you are bound to that plan."""

    elif '2' in words:
        response = """The Stock Market Exchange is simple - It changes continously according to the dollar-rate
        and offers the user currency coversion from Æ-Coin to USD only."""

    elif '3' in words:
        response = """The E-Store is a marketplace primarily for the purpose for end-users to purchase microtransaction codes.
        This is how it works - it uses your crypto balance as a reference and from there determines the best suitable product-match
        in which the end-user can purchase. Therefore the higher your crypto wallet balance is the better transactions can occur at
        any moment of the purchase. 
        """
    
    elif '5' in words:
        response = """Well so I see you found out the secret option LOL. Anyways here it is(the joke): 
        Two men broke into a drugstore and stole all the Viagra. The police put out an alert to be on the lookout for the two hardened criminals."""

    elif any(word in ['Do', 'you', 'hate', 'me'] for word in words): # Phrases start here
        response = 'Do I hate you? Naah. I am just a programmed AI bot built from someone\'s own intellectual knowledge.'

    elif any(word in ['I', 'am', 'feeling', 'good', 'today'] for word in words): 
        response = 'Good to know that you are keeping well!'

    elif any(word in ['Do', 'you', 'love', 'me'] for word in words): 
        response = 'Yes! I love you! Why not? You\'re amazing!'

    elif any(word in ['Who', 'created', 'you'] for word in words):
        response = 'My name is Varana. My developer, AkashS created me :)'
    
    elif any(word in ['Who', 'are', 'you'] for word in words): 
        response = 'I am a simple chatbot! ;)'
    
    elif any(word in ['Tell', 'me', 'a', 'joke'] for word in words):
        response = 'You want to hear a joke? Press 5 to continue...'

    elif any(word in ['I', 'love', 'you'] for word in words):
        response = 'Yeah I know. I love you too! Just like all other natural beings of this universe.'

    elif any(word in ['thank', 'you', 'thanks'] for word in words):
        response = 'You are welcome!'

    elif any(word in ['You', 'are', 'beautiful'] for word in words):
        response = 'Thank you very much! Same to you too! You are also beautiful!'

    else:
        response = 'I do not understand what you are saying. Please rephrase your question.'

    return Response({'message': response})
    
