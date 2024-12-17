# models.py
from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=200)
    price = models.FloatField()
    image = models.ImageField(upload_to="images/", null=True, blank=True)

    def __str__(self):
        return self.title


# Create your models here.
