from .models import Record
from rest_framework import serializers

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ("record_id", "file", "create_dt", "dance_id", "user")