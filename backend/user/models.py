"""
用户信息数据库
"""
from django.db import models


class User(models.Model):
    """
    用户名，密码，ID 序列号
    """
    name = models.CharField(max_length=10, blank=False, null=False)
    password = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return self.name
