from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

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
        response_a = "Hello! I am a Bot! Type 'help' for a list of available options."
        return Response({'message': response_a})

    message = request.data['message']

    words = nltk.word_tokenize(message.lower())

    words = [word for word in words if word not in stop_words]

    words = [lemmatizer.lemmatize(word) for word in words]
    
    # response = 'Hello, how can I help you?'

    if 'help' in words:
        response = """I'm glad you asked for help! Here are some of the options/commands available: 
        1. Crypto-mining (AE-Coin)
        2. Stock Market Exchange
        3. E-Store (Microtransactions)
        If you would like information on a topic from the above - please insert the required number associated with the command."""

    elif 'love' in words:
        response = 'I am happy to see this from you!'

    elif 'problem' in words:
        response = 'If you encounter any problems on this platform please feel free to contact us!'

    elif 'hate' in words:
        response = "I'm very sorry to see that you are experiencing this :( We really strive ourselves to deliver exceptional value."
    
    elif 'thanks' in words:
        response = 'You are welcome!'

    # elif 'thank' and 'you' in words:
    #     response = 'You are welcome!'

    elif '1' in words:
        response = """Crypto-mining: This is a process of validating and recording transactions on the AE-Coin network.
        The main purpose is to validate transactions to prevent fraud and adding new blocks to the blockchain. This platform    
        offers the user three plans for mining AE-Coin. Once you activate a plan - you are bound to that plan."""

    elif '2' in words:
        response = """The Stock Market Exchange is simple - It changes continously according to the dollar-rate
        and offers the user currency coversion from AE-Coin to USD only."""

    elif '3' in words:
        response = """The E-Store is a marketplace primarily for the purpose for end-users to purchase microtransaction codes.
        This is how it works - it uses your crypto balance as a reference and from there determines the best suitable product-match
        in which the end-user can purchase. Therefore the higher your crypto wallet balance is the better transactions can occur at
        any moment of the purchase. 
        """

    else:
        response = 'I do not understand what you are saying. Please rephrase your question.'

    return Response({'message': response})
    
