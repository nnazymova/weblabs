from django.urls import path

from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('categories/', views.categories),
    path('categories/<int:id>/', views.category),
    path('categories/<int:id>/products/', views.category_products),
    path('products/', views.Products.as_view()),
    path('products/<int:id>/', views.ProductDetailed.as_view()),
    path('likes/', views.like),
    path('login/', obtain_jwt_token),
    # path('logout/', views.logout),
    
]