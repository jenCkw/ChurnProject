from django.contrib import admin

# Register your models here.

from .models import Customer,Partner, Service, TypeService

admin.site.register(Customer)

admin.site.register(Partner)

admin.site.register(Service)

admin.site.register(TypeService)