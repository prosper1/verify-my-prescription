from rest_framework import serializers
from rest_framework.relations import HyperlinkedRelatedField
from .models import Prescription, Item
from patient.models import Patient, UniquePatient
from doctor.models import Doctor
from django.contrib.auth.models import User

class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = (
            'name',
            'size',
            'price'
        )

class PrescriptionSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Prescription
        fields = (
            'id',
            'u_id',
            'prescription',
            'items',
            'u_id',
            'doctor'
            )

class DoctorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Doctor
        fields = (
            'id',
            'user',
            )

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = (
            'id',
            'user',
            'delivery_address',
            'lat',
            'lng',
            )


class UPatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = UniquePatient
        fields = (
            'id',
            'patient',
            'u_Id',
            )