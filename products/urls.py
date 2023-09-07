from django.urls import path
from .views import (DisplayAllProducts, ProductDetail, PurchaseView, Purchase205684, Purchase256004, Purchase265771,
                    Purchase321549, Purchase321892, Purchase326881, Purchase355840, Purchase358621, Purchase512025, 
                    Purchase516852, Purchase564895, Purchase568703, Purchase569533, Purchase684321, Purchase688410, 
                    Purchase820034, Purchase831562, Purchase843056, Purchase844321, Purchase910240, Purchase922640, 
                    Purchase922681, Purchase991330, Purchase993546, Purchase994668)

app_name = 'products'

urlpatterns = [
    
    path('products/all/', DisplayAllProducts.as_view(), name='display-all-products'),
    path('products/view/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('products/purchase/<int:pk>/', PurchaseView.as_view(), name='purchase-product'),
    
    path('products/purchase-item-205684/<int:pk>/', Purchase205684.as_view()),
    path('products/purchase-item-256004/<int:pk>/', Purchase256004.as_view()),
    path('products/purchase-item-265771/<int:pk>/', Purchase265771.as_view()),
    path('products/purchase-item-321549/<int:pk>/', Purchase321549.as_view()),
    path('products/purchase-item-321892/<int:pk>/', Purchase321892.as_view()),
    path('products/purchase-item-326881/<int:pk>/', Purchase326881.as_view()),
    path('products/purchase-item-355840/<int:pk>/', Purchase355840.as_view()),
    path('products/purchase-item-358621/<int:pk>/', Purchase358621.as_view()),
    path('products/purchase-item-512025/<int:pk>/', Purchase512025.as_view()),
    path('products/purchase-item-516852/<int:pk>/', Purchase516852.as_view()),
    path('products/purchase-item-564895/<int:pk>/', Purchase564895.as_view()),
    path('products/purchase-item-568703/<int:pk>/', Purchase568703.as_view()),
    path('products/purchase-item-569533/<int:pk>/', Purchase569533.as_view()),
    path('products/purchase-item-684321/<int:pk>/', Purchase684321.as_view()),
    path('products/purchase-item-688410/<int:pk>/', Purchase688410.as_view()),
    path('products/purchase-item-820034/<int:pk>/', Purchase820034.as_view()),
    path('products/purchase-item-831562/<int:pk>/', Purchase831562.as_view()),
    path('products/purchase-item-843056/<int:pk>/', Purchase843056.as_view()),
    path('products/purchase-item-844321/<int:pk>/', Purchase844321.as_view()),
    path('products/purchase-item-910240/<int:pk>/', Purchase910240.as_view()),
    path('products/purchase-item-922640/<int:pk>/', Purchase922640.as_view()),
    path('products/purchase-item-922681/<int:pk>/', Purchase922681.as_view()),
    path('products/purchase-item-991330/<int:pk>/', Purchase991330.as_view()),
    path('products/purchase-item-993546/<int:pk>/', Purchase993546.as_view()),
    path('products/purchase-item-994668/<int:pk>/', Purchase994668.as_view()),

]