from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('customer/', views.getAllCustomers),
    path('customer/create/', views.createCustomer),
    path('customer/put/<str:pk>/',views.updateCustomer ),
    path('customer/delete/<str:pk>/',views.deleteCustomer ),
    path('partner/', views.getPartner),
    path('partner/create/', views.createPartner),
    path('partner/put/<str:pk>/',views.updatePartner ),
    path('partner/delete/<str:pk>/',views.deletePartner),
    path('typeservice/', views.getAllTypeService),
    path('typeservice/create/', views.createTypeService),
    path('typeservice/put/<str:pk>/',views.updateTypeService ),
    path('typeservice/delete/<str:pk>/',views.deleteTypeService ),
    path('service/', views.getAllService),
    path('service/create/',views.createService),
    path('service/put/<str:pk>/',views.updateService),
    path('service/delete/<str:pk>/',views.deleteService ) 
]