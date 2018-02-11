"""
返回 CSRFToken
"""
from django.shortcuts import render


def give_csrf(request):
    """
    返回 CSRFToken
    """
    response = render(request, 'devCSRF/csrf.html')
    return response
