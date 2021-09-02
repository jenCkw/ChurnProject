from rest_framework.decorators import api_view
from rest_framework.response import Response


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
