from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import datetime
import os
path=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'media')


# Create your models here.
class Post(models.Model):
    title=models.CharField(max_length=40)
    body=models.TextField()



class Image(models.Model):
    image=models.ImageField(upload_to='gallery',height_field=None, width_field=None, max_length=100,blank=True)
    post=models.ForeignKey(Post,related_name='images')
    imagedes=models.CharField(max_length=20)
    class Meta:
        ordering='-image',
