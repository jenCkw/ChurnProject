from rest_framework.serializers import ModelSerializer
from .models import Customer, Partner, Service, TypeService

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'



class PartnerSerializer(ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'



class TypeServiceSerializer(ModelSerializer):
    class Meta:
        model = TypeService
        fields = '__all__'



class ServiceSerializer(ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'