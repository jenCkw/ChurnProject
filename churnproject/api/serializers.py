from rest_framework.serializers import ModelSerializer
from .models import Customer, Partner

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'



class PartnerSerializer(ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'