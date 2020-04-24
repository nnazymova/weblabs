from rest_framework import serializers
from api.models import Category, Product, User, Manager, Likes

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = 'id', 'name'

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    category = CategorySerializer()
    name = serializers.CharField()
    price = serializers.FloatField()
    rating = serializers.FloatField()
    description = serializers.CharField()
    image = serializers.CharField()
    link = serializers.CharField()
    wlink = serializers.CharField()
    like = serializers.IntegerField()

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        
        instance.save()
        return instance



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'id', 'email', 'username', 'firstname', 'lastname', 'password'

    def create(self, validated_data):
        return User.objects.create(**validated_data)

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = 'id', 'email', 'username', 'password'

    def create(self, validated_data):
        return User.objects.create(**validated_data)


class LikeSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    user = UserSerializer()
    product = ProductSerializer()

    def create(self, validated_data):
        print(validated_data)
        return Likes.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
