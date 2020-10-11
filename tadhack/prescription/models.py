from django.db import models
from patient.models import UniquePatient
from doctor.models import Doctor

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=30)
    price = models.IntegerField(default=0)
    size = models.CharField(max_length=6)

class Prescription(models.Model):
    u_id = models.CharField(max_length=30)
    prescription = models.TextField()
    items = models.ManyToManyField(Item)
    doctor = models.ForeignKey(Doctor,on_delete=models.DO_NOTHING,null=True)
    is_checkout = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.u_id
