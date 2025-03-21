from django.contrib.auth.models import User
from rest_framework import generics, status
from .serializers import RegisterSerializer, LoginSerializer, ProfileSerializer
from .models import Profile
from rest_framework.response import Response

class ProfileView(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data #validate()의 리턴값이 Token
        return Response({"token": token.key})