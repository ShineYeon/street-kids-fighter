from django.db import models
from django.contrib.auth.models import User
from signup.models import Profile

import os

# Create your models here.
class Music(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='music_user',db_column='user_id')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='music_profile', db_column='profile')
    music_id = models.AutoField('music_id',primary_key=True)
    file = models.FileField(upload_to='musics/', default='default.mp3')
    name =models.CharField(max_length=50)
    upload_dt = models.DateTimeField(auto_now=True)
    
    def filename(self):
        return os.path.basename(self.file.name)
    
    class Meta:
        ordering = ('upload_dt',)
