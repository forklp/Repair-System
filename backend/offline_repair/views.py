from django.shortcuts import render
import json
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from . import models
# Create your views here.
def login(request):
    response = HttpResponse(0)
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        account = data['username']
        password = data['password']
        if models.User.objects.filter(user_account=account):
            if models.User.objects.filter(user_password=password):
                account = models.User.objects.get(user_account=account).user_account
                request.session['account'] = account
                response = HttpResponse(200)
                response.set_cookie('token', make_password(account))
    return response

def logout(request):
    request.session.delete('account')
    response = HttpResponse('Hit the road')
    response.delete_cookie('token')
    return response
