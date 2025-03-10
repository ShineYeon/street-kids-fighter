from django.urls import path
from rest_framework import routers

from .views import MusicViewSet

router = routers.SimpleRouter()
router.register('', MusicViewSet)

urlpatterns = router.urls

