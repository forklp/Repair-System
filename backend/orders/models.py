from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=10)
    orderId = models.PositiveIntegerField()
    desc = models.TextField()

    def __str__(self):
        return self.name

