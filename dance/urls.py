from django.urls import path
from rest_framework import routers

from .views import DanceViewSet

router = routers.SimpleRouter()
router.register('', DanceViewSet)

urlpatterns = router.urls
