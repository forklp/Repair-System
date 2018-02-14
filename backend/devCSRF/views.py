from django.shortcuts import render


def give_csrf(request):
    response = render(request, 'devCSRF/csrf.html')
    return response
