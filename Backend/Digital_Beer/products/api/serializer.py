from rest_framework.serializers import ModelSerializer
from products.models import Product
from categories.api.serializer import CategorySerializer
from rest_framework import serializers

class ProductSerializer(ModelSerializer):
    category_data = CategorySerializer(source='category', read_only=True)
    category_title = serializers.CharField(source='category.title', read_only=True)
    
    class Meta:
        model = Product
        fields = ['id', 'title', 'image', 'price', 'active', 'category', 'category_title', 'category_data']