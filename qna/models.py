from django.db import models
from signup.models import User
# Create your models here.
class QnA(models.Model):
    qna_id = models.IntegerField('qna_id',primary_key=True)
    title = models.CharField('TITLE', max_length=50)
    content = models.TextField('CONTENT')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE,related_name='qna.user+',db_column='id')