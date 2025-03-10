from rest_framework import permissions
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from .models import Music

class CustomPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        # if request.method == 'GET':
        #    return True
        return request.user.is_authenticated
    
    
    def has_object_permission(self, request, view, obj):
        # if request.method in permissions.SAFE_METHODS:
        #     return True
        return obj.user==request.user
        