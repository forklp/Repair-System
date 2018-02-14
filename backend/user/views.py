"""
用户登录系统
数据 api
"""
import json
from django.http import HttpResponse
from .models import User

def login(request):
    """
    用户登录
    用户登录成功返回 200
    用户登录失败
    """
    msg = 0 # 状态码
    if request.method == 'POST':
        data = json.loads(request.body.decode()) # 把 Json 格式转化成 Dict 格式
        name = data['username']
        password = data['password']
        if User.objects.filter(name=name):
            if User.objects.filter(password=password):
                msg = 200
    response = HttpResponse(msg)
    return response
