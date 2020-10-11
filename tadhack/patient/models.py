from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Patient(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    id_number = models.CharField(max_length=13,unique=True)
    delivery_address = models.CharField(max_length=200)
    lat = models.FloatField(blank=True)
    lng = models.FloatField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

class UniquePatient(models.Model):
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE)
    u_Id = models.CharField(max_length=30)

    def __str__(self):
        return self.patient.user.username + ' ' + self.u_Id