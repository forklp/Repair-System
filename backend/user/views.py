"""
用户登录系统
数据 api
"""
from django.http import HttpResponse

def login(request):
    """
    用户登录
    """
    if request.method == "GET":
        response = HttpResponse('GET')
    return response
