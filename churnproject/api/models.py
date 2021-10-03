from django.db import models

# Create your models here.

class Partner(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name[0:50]




class Customer(models.Model):
    name = models.TextField()
    gender = models.TextField()
    address = models.TextField()
    phone = models.TextField()
    partner = models.ForeignKey(Partner, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name[0:50]




class TypeService(models.Model):
    name = models.TextField()
    price = models.DecimalField(decimal_places=10, max_digits=10)


class Service(models.Model):
    name = models.TextField()
    typeService = models.ForeignKey(TypeService,on_delete=models.CASCADE)


