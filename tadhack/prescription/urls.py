from django.urls import path, include, re_path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'prescription',views.PrescriptionViewSet)
router.register(r'u_id',views.UniquePatientViewSet)
router.register(r'my_uid',views.UniqueMeViewSet)



urlpatterns = [
    path('', include(router.urls)),  
]
