from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('customer/', views.getAllCustomers),
    path('customer/create/', views.createCustomer),
    path('customer/put/<str:pk>/',views.updateCustomer ),
    path('customer/delete/<str:pk>/',views.deleteCustomer ) ,
    path('Partner/', views.getAllPartner),
    path('Partner/create/', views.createPartner),
    path('Partner/put/<str:pk>/',views.updatePartner ),
    path('Partner/delete/<str:pk>/',views.deletePartner ),
    path('TypeService/', views.getAllTypeService),
    path('TypeService/create/', views.createTypeService),
    path('TypeService/put/<str:pk>/',views.updateTypeService ),
    path('TYpeService/delete/<str:pk>/',views.deleteTypeService ),
    path('customer/', views.getAllCustomers),
    path('customer/create/', views.createCustomer),
    path('customer/put/<str:pk>/',views.updateCustomer ),
    path('customer/delete/<str:pk>/',views.deleteCustomer ),
    path('Service/', views.getAllService),
    path('Service/create/',views.createService),
    path('Service/put/<str:pk>/',views.updateService),
    path('Service/delete/<str:pk>/',views.deleteService )    
]   


