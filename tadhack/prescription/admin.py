from django.contrib import admin
from .models import Prescription, Item
from patient.models import UniquePatient, Patient
from doctor.models import Doctor

# Register your models here.

admin.site.register(Patient)
admin.site.register(UniquePatient)
admin.site.register(Doctor)
admin.site.register(Prescription)
admin.site.register(Item)