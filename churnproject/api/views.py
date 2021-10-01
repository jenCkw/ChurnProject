from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import CustomerSerializer, PartnerSerializer
from .models import Customer, Partner

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/client/',
            'method': 'GET',
            'body':'None',
            'description': 'Returns an array of client'
        },
        {
            'Endpoint': '/client/id',
            'method': 'GET',
            'body':'None',
            'description': 'Returns an single client'
        },
        {
            'Endpoint': '/client/create',
            'method': 'POST',
            'body':{'body':''},
            'description': 'Returns an array of client'
        },
        {
            'Endpoint': '/client/id/update',
            'method': 'PUT',
            'body':{'body':''},
            'description': 'creates an existing client with data sent in put req'
        },
        {
            'Endpoint': '/client/id/delete',
            'method': 'DELETE',
            'body':'None',
            'description': 'delete and exiting client'
        }
    ]
    return Response(routes)



@api_view(['GET'])
def getAllCustomers(request):
    customer = Customer.objects.all()
    serializer = CustomerSerializer(customer, many=True)
    return Response(serializer.data)



@api_view(["POST"])
def createCustomer(request):
    data = request.data
    customer = Customer.objects.create(name=data['name'], gender=data['gender'], phone=data['phone'], address=data['address'])
    serializer = CustomerSerializer(customer, many=False)
    return Response(serializer.data)
