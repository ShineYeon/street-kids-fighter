from django.urls import path
from .views import RegisterView, LoginView, ProfileView

app_name = 'signup'
urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/<int:pk>/', ProfileView.as_view()),
]