from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=20)

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=30)
    price = models.FloatField()
    rating = models.FloatField()
    description = models.TextField()
    image = models.CharField(max_length=60)
    link = models.CharField(max_length=60)
    wlink = models.CharField(max_length=60)
    like = models.IntegerField()

class User(models.Model):
    email = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    
class Manager(models.Model):
    email = models.CharField(max_length=20)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    

class Likes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)