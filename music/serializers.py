from rest_framework import serializers
from rest_framework.serializers import ReadOnlyField
from signup.serializers import ProfileSerializer

from .models import Music

class MusicSerializer(serializers.ModelSerializer):
    user = ReadOnlyField(source='user.username')
    profile = ProfileSerializer(read_only=True) # nested serializer
    
    class Meta:
        model = Music
        fields = ('user', 'music_id', 'profile', 'file', 'upload_dt', 'name')
        
class MusicCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('file', 'name')