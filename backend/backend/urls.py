from django.contrib import admin
from django.urls import path, include
from devCSRF import views as csrf

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls')),
    path('csrf/', csrf.give_csrf),
    path('order/', include('orders.urls')),
]
