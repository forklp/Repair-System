"""
user 数据库后台
"""
from django.contrib import admin
from .models import User
from django.contrib.sessions.models import Session

admin.site.register(User)
admin.site.register(Session)
