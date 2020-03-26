from django.http import JsonResponse
from api.models import Category
from api.models import Product


def product_list(request):
    try:
        products = Product.objects.all()
        json_products = [p.to_json() for p in products]
        return JsonResponse(json_products, safe=False)
    except:
        return JsonResponse({"error": "product does not exists"})


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(product.to_json())


def category_list(request):
    categories = Category.objects.all()
    json_categories = [c.to_json() for c in categories]
    return JsonResponse(json_categories, safe=False)


def category_detail(request, pk):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(category.to_json())


def category_product(request, pk):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    products = category.product_set.all()
    json_products = [p.to_json() for p in products]
    return JsonResponse(json_products, safe=False)
