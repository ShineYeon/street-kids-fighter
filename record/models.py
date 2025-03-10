from django.db import models
from dance.models import Dance
from django.contrib.auth.models import User

# Create your models here.
class Record(models.Model):
    
    record_id = models.AutoField('record_id',primary_key=True)
    file = models.FileField(upload_to='record/', default='noname.mp4')
    create_dt = models.DateTimeField('CREATE DT', auto_now_add=True)
    dance_id = models.ForeignKey(Dance, on_delete=models.PROTECT,related_name='dance',db_column='dance_id')
    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name='r_user', db_column='r_user')
    
