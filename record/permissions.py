from rest_framework import permissions
from .models import Record
from django.contrib.auth import get_user_model

class CustomReadOnly(permissions.BasePermission):
    
    def has_permission(self, request, view):
        
        return request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if obj.user == get_user_model:
            return obj.user == request.user
        else:
            return False