from django.db import models

# Create your models here.

class Customer(models.Model):
    name = models.TextField()
    gender = models.TextField()
    address = models.TextField()
    phone = models.TextField()


class Partner(models.Model):
    name = models.TextField()


class TypeService(models.Model):
    name = models.TextField()
    price = models.DecimalField()


class Service(models.Model):
    name = models.TextField()
    typeService = models.ForeignKey(TypeService,on_delete=models.CASCADE)

    

