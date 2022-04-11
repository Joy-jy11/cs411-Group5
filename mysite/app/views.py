from django.shortcuts import render
import requests

def index(request):
    response = requests.get('https://imdb-api.com/en/API/Title/k_5z30pom8/tt1375666/FullActor').json()
    data = response
    return render(request, 'index.html',{'response': response})
# Create your views here.
