from rest_framework import viewsets
from .models import Record
from .permissions import CustomReadOnly
from .serializers import RecordSerializer


class RecordView(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    permission_classes = [CustomReadOnly]
    serializer_class = RecordSerializer
    
    def get_queryset(self):
        queryset = Record.objects.all()
        queryset = queryset.filter(user=self.request.user)
        return queryset
    
    

    