from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import CustomerSerializer, PartnerSerializer
from .models import Customer, Partner

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/customer/',
            'method': 'GET',
            'body':'None',
            'description': 'Returns an array of client'
        },
        {
            'Endpoint': '/customer/id',
            'method': 'GET',
            'body':'None',
            'description': 'Returns an single customer'
        },
        {
            'Endpoint': '/customer/create',
            'method': 'POST',
            'body':{'body':''},
            'description': 'Returns an array of customer'
        },
        {
            'Endpoint': '/customer/id/update',
            'method': 'PUT',
            'body':{'body':''},
            'description': 'creates an existing customer with data sent in put req'
        },
        {
            'Endpoint': '/customer/id/delete',
            'method': 'DELETE',
            'body':'None',
            'description': 'delete and exiting customer'
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



@api_view(["PUT"])
def updateCustomer(request,pk):
    data = request.data
    customer = Customer.objects.get(id=pk)
    serializer = CustomerSerializer(customer, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(["DELETE"])
def deleteCustomer(request,pk):
    customer = Customer.objects.get(id=pk)
    customer.delete()
    return Response("custumer deleted")




# =======partner crud======
@api_view(["POST"])
def createPartner(request):
    data = request.data
    partner = Partner.objects.create(name=data["name"])
    serializer = PartnerSerializer(partner, many=False)
    return Response(serializer.data)



@api_view(["GET"])
def getPartner(request):
    partner = Partner.objects.all()
    serializer = PartnerSerializer(partner, many=True)
    return Response(serializer.data)




@api_view(["PUT"])
def updatePartner(request,pk):
    data = request.data
    partner = Partner.objects.get(id=pk)
    serializer = PartnerSerializer(partner,data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)




@api_view(["DELETE"])
def deletePartner(request,pk):
    partner = Partner.objects.get(id=pk)
    partner.delete()
    return Response("partner deleted")