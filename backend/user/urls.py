"""
用户登录系统
后端路由
"""
from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login),
]
