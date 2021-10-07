from django.db import models

# Create your models here.

class Partner(models.Model):
    name = models.TextField()



class Customer(models.Model):
    name = models.TextField()
    gender = models.TextField()
    address = models.TextField()
    phone = models.TextField()
    partner = models.ForeignKey(Partner, on_delete=models.CASCADE)
    
    

class TypeService(models.Model):
    name = models.TextField()
    price = models.FloatField()


class Service(models.Model):
    name = models.TextField()
    service = models.ForeignKey(TypeService,on_delete=models.CASCADE)


