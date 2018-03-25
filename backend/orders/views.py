from django.http import HttpResponse
from . import models
import json

def rest(request):
    all_order_query = models.Order.objects.all()
    all_order = []
    for el in all_order_query:
        all_order.append({'title': el.name, 'id': el.orderId, 'desc': el.desc})
    response = HttpResponse(json.dumps(all_order, ensure_ascii=False))
    return response
