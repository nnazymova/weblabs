from django.shortcuts import render

from api.serializers import CategorySerializer, ProductSerializer, UserSerializer, LikeSerializer
from api.models import Category, Product, User, Manager, Likes

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
import json

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


# # @api_view(['POST'])
# def logout(request):
#     request.auth.delete()
#     return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def categories(request):
    if request.method == 'GET':
        try:
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            return Response(serializer.data,  status=status.HTTP_200_OK)
        except:
            return Response({'ERROR!!': 'NO COMPANIES FOUND'},  status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'POST':
        serializer = CategorySerializer(data = json.loads(request.body))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,  status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def category(request, id):
    try:
        category = Category.objects.get(id=id)
    except:
        return Response({'ERROR!!': 'NO COMPANY FOUND'},  status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=json.loads(request.body))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'DELETE':
        category.delete()
        return Response({"message": "category deleted"}, status=status.HTTP_200_OK)


@api_view(['GET'])
def category_products(request, id):
    if request.method == 'GET':
        try:
            category = Category.objects.get(id=id)
            products = category.product_set.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data,  status=status.HTTP_200_OK)
        except:
            return Response({'ERROR!!': 'NO PRODUCTS FOUND'},  status=status.HTTP_404_NOT_FOUND)
  

class Products(APIView):
    def get(self, request):
        try:
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data,  status=status.HTTP_200_OK)
        except:
            return Response({'ERROR!!': 'NO PRODUCTS FOUND'},  status=status.HTTP_404_NOT_FOUND)
    def post(self, request):
        data_body = json.loads(request.body)
        
        category_id = data_body['category']['id']
        category = Category.objects.get(id=category_id)
        
        product = Product(
            category = category,
            name = data_body['name'],
            price = data_body['price'],
            rating = data_body['rating'],
            description = data_body['description'],
            image = data_body['image'],
            link = data_body['link'],
            wlink = data_body['wlink'],
            like = data_body['like'],
        )
        product.save()

        return Response({'message': "all good. new product created!`"}, status=status.HTTP_200_OK)

class ProductDetailed(APIView):
    def get_product(self, id):
        try:
            return Product.objects.get(id=id)
        except:
            return Response({'ERROR!!': 'NO PRODUCT FOUND'},  status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        product = self.get_product(id)
        serializer = ProductSerializer(product)
        return Response(serializer.data,  status=status.HTTP_200_OK)
    
    def put(self, request, id):
        product = self.get_product(id)
        serializer = ProductSerializer(instance=product, data=json.loads(request.body))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, id):
        product = self.get_product(id)
        product.delete()

@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def like(request):
    if request.method == 'GET':
        try:
            likes = Likes.objects.all()
        except:
            return Response({'ERR': 'NOT FOUND'}, status=status.HTTP_404_NOT_FOUND)
        serializer = LikeSerializer(likes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        data_unicode = request.body.decode('utf-8')
        data_body = json.loads(data_unicode)
        userData = data_body['user']
        productData = data_body['product']

        try:
            userInstance = User.objects.get(id=userData['id'])
            productInstance = Product.objects.get(id=productData['id'])
        except:
            return Response({"error": "error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        Likes.objects.create(user=userInstance, product=productInstance)
        return Response({"message": "created succesfully"}, status=status.HTTP_200_OK)