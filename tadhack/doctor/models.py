from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Doctor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username