from django.urls import path
from . import views

urlpatterns = [
    path('rest/', views.rest),
]
