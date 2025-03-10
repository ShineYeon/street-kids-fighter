# views.py
from rest_framework import viewsets

from signup.models import Profile
from .models import Music
from .permissions import CustomPermission
from .serializers import MusicSerializer, MusicCreateSerializer
from rest_framework.permissions import IsAuthenticated

class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    permission_classes = [IsAuthenticated, CustomPermission]
    
    def get_queryset(self):
        queryset = Music.objects.all()
        query_set = queryset.filter(user=self.request.user)
        return query_set
    
    def get_serializer_class(self):
        if self.action == 'list' or 'retrieve':
            #queryset = queryset.filter(user=self.request.user.id)
            return MusicSerializer
        return MusicCreateSerializer
    
    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(user=self.request.user, profile=profile)