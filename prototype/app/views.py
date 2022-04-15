from django.shortcuts import render
import requests
from .import config

def index(request):
    response = requests.get("https://imdb-api.com/en/API/Title/" + config.api_key + "/tt1375666/FullActor").json()
    data = response
    return render(request, 'index.html',{'response': response})

