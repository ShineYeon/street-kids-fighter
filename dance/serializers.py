from rest_framework import serializers
from rest_framework.serializers import ReadOnlyField

from .models import Dance

class DanceSerializer(serializers.ModelSerializer):
    user = ReadOnlyField(source='user.username')
    class Meta:
        model = Dance
        fields = ("dance_id", "file", "create_dt", "music", "user")
        
class DanceCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dance
        fields = ('music')