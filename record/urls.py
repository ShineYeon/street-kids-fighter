from django.urls import path
from rest_framework import routers

from .views import RecordView

router = routers.SimpleRouter()
router.register('', RecordView)

urlpatterns = router.urls

