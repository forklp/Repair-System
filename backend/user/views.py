"""
用户登录系统
数据 api
"""
import json
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from .models import User

def login(request):
    response = HttpResponse(0)
    if request.method == 'POST':
        data = json.loads(request.body.decode()) # 把 Json 格式转化成 Dict 格式
        name = data['username']
        password = data['password']
        if User.objects.filter(name=name):
            if User.objects.filter(password=password):
                user_id = User.objects.get(name=name).id
                request.session['id'] = user_id
                response = HttpResponse(200)
                response.set_cookie('token', make_password(user_id))
    return response

def logout(request):
    request.session.flush()
    response = HttpResponse('Hit the road')
    response.delete_cookie('token')
    return response
