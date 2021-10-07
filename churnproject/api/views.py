from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import CustomerSerializer, PartnerSerializer, ServiceSerializer, TypeServiceSerializer
from .models import Customer, Partner, Service, TypeService

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


#============= service endpoint=========

@api_view(['GET'])
def getAllService(request):
    service = Service.objects.all()
    serializer = ServiceSerializer(service, many=True)
    return Response(serializer.data)



@api_view(["POST"])
def createService(request):
    data = request.data
    service = Service.objects.create(name=data['name'], service_id=data['service_id'])
    serializer = ServiceSerializer(service, many=False)
    return Response(serializer.data)



@api_view(["PUT"])
def updateService(request,pk):
    data = request.data
    service= Service.objects.get(id=pk)
    serializer = ServiceSerializer(service, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(["DELETE"])
def deleteService(request,pk):
    service = Service.objects.get(id=pk)
    service.delete()
    return Response("service deleted")


#============= service endpoint=========
@api_view(['GET'])
def getAllTypeService(request):
    typService = TypeService.objects.all()
    serializer = TypeServiceSerializer(typService, many=True)
    return Response(serializer.data)



@api_view(["POST"])
def createTypeService(request):
    data = request.data
    typeService = TypeService.objects.create(name=data['name'], price=data['price'])
    serializer = TypeServiceSerializer(typeService, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
def updateTypeService(request,pk):
    data = request.data
    typService = TypeService.objects.get(id=pk)
    serializer = TypeServiceSerializer(typService, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(["DELETE"])
def deleteTypeService(request,pk):
    typService = TypeService.objects.get(id=pk)
    typService.delete()
    return Response("custumer deleted")

