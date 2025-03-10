from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class QnaTV(TemplateView):
    template_name = 'qna/qna.html'