from django.db import models

# Create your models here.

class Customer(models.Model):
    name = models.TextField()
    gender = models.TextField()
    address = models.TextField()
    phone = models.TextField()

    def __str__(self):
        return self.name[0:50]



class Partner(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name[0:50]
