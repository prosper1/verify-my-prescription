from django.shortcuts import render
from .models import Prescription
from .serializers import (
    DoctorSerializer,
    PatientSerializer,
    PrescriptionSerializer,
    UPatientSerializer
)
from patient.models import Patient, UniquePatient
from doctor.models import Doctor
from rest_framework import viewsets , serializers
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth.models import User
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.generic import View

# Create your views here.

class PrescriptionViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer


    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        username = self.request.user.username
        patient = UniquePatient.objects.get(patient__user__username=username)
        u_id = patient.u_Id
        _prescription = Prescription.objects.filter(u_id=u_id,is_checkout=False).order_by('-id')[:1]
        return _prescription


class UniquePatientViewSet(viewsets.ModelViewSet):
    queryset = UniquePatient.objects.all()
    serializer_class = UPatientSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('u_Id',)


class UniqueMeViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated,)
    queryset = UniquePatient.objects.all()
    serializer_class = UPatientSerializer


    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        username = self.request.user.username
        patient = UniquePatient.objects.filter(patient__user__username=username)
        return patient

