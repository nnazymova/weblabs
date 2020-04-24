from django.contrib import admin
from api.models import Category, Product, User, Manager, Likes


admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Manager)
admin.site.register(User)
admin.site.register(Likes)

