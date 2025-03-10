from django.db import models
from music.models import Music
from signup.models import User
# Create your models here.

    
class Dance(models.Model):
    dance_id = models.AutoField('dance_id',primary_key=True)
    file = models.FileField(upload_to='dance/', default='noname.mp3')
    create_dt = models.DateTimeField('CREATE DT', auto_now_add=True)
    music = models.ForeignKey(Music, on_delete=models.CASCADE,related_name='dance_music',db_column='music_id')
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='dance_user',db_column='user_id')
    
