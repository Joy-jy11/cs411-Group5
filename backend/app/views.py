
from rest_framework.views import APIView

from django.shortcuts import render
from rest_framework.views import APIView
from .models import *

from rest_framework.response import Response
from .serializer import *
from django.shortcuts import render
from .models import React
import requests
from .import config



class ReactView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):
        detail = [{"name": detail.name}
                  for detail in React.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


# Create your views here.
def index(request):
    data = React.objects.all().last()

    response = requests.get(
        "https://imdb-api.com/en/API/SearchMovie/" + config.api_key_imdb + "/" + data.name).json()

    result=response.get("results")
    id = result[0].get("id")

    res1 = requests.get("https://www.omdbapi.com/?t=" + data.name + "&apikey=" + config.api_key_omdb).json()
    yearR = React(name="Year: "+res1.get("Year"))
    yearR.save()


    res2 = requests.get("https://imdb-api.com/en/API/Ratings/"+ config.api_key_imdb +"/" + id).json()

    imDbRd = float(res2.get("imDb"))
    imDbR = React(name="imdb: "+str(imDbRd) + "/10")
    imDbR.save()

    # rottenTomatoesRd = float(res2.get("rottenTomatoes"))
    # rottenTomatoesR = React(name="rottenTomatoes: "+ str(rottenTomatoesRd) + "/100")
    # rottenTomatoesR.save()

    metacriticRd = float(res2.get("metacritic"))
    metacriticR = React(name="metacritic: "+ str(metacriticRd) +"/100")
    metacriticR.save()

    theMovieDbRd = float(res2.get("theMovieDb"))
    theMovieDbR = React(name= "theMovieDb: " + str(theMovieDbRd) + "/10")
    theMovieDbR.save()

    filmAffinityRd = float(res2.get("filmAffinity"))
    filmAffinityR = React(name= "filmAffinity: " + str(filmAffinityRd) + "/10")
    filmAffinityR.save()

    averaged = (imDbRd + metacriticRd/10 + theMovieDbRd + filmAffinityRd )/4
    average = React(name= "average: " + str(averaged) + "/10" )
    average.save()


    return render(request, 'index.html', {'response': response})
