from django.shortcuts import render
import requests
from .import config


def index(request):

     response = requests.get(
        "https://imdb-api.com/en/API/Ratings/" + config.api_key + "/tt1375666").json()

     imDbR = float(response.get("imDb"))
     metacriticR = float(response.get("metacritic"))
     theMovieDbR = float(response.get("theMovieDb"))
     rottenTomatoesR = float(response.get("rottenTomatoes"))/10
     filmAffinityR = float(response.get("filmAffinity"))



     return render(request, 'index.html', {'response': "imDb: " + str(imDbR) + "/10 \n"
                                           + "metacritic: " + str(metacriticR) + "/100 \n"
                                          + "theMovieDb: " + str(theMovieDbR) + "/10 \n"
                                          + "rottenTomatoes: " + str(rottenTomatoesR) + "/100 \n"
                                          + "filmAffinity: " + str(filmAffinityR) + "/10 \n"
                                          + "Our Average Score: " + str((imDbR+metacriticR/10+theMovieDbR+rottenTomatoesR/10+filmAffinityR)/5)})
