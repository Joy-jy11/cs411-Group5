from django.db import models


class React(models.Model):
    name = models.CharField(max_length=10000000000000000000000000000)
    #title = models.TextField()
   # detail = models.CharField(max_length=500)
   #      def __str__(self):
   #          return self.name

# class Post(models.Model):
#     title = models.TextField()
#
#     def __str__(self):
#         return self.title