from django.urls import path

from . import views


app_name = 'qna'
urlpatterns = [
    # /blog/post/99/
    path('', views.QnaTV.as_view(), name='qna'),
]