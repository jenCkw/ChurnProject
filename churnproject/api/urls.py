from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('customer/', views.getAllCustomers),
    path('customer/create/', views.createCustomer)
]