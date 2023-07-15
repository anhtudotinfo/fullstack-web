from django.urls import path
from .views import DisplayAllProducts, ProductDetail, PurchaseView

app_name = 'products'

urlpatterns = [
    
    path('products/all/', DisplayAllProducts.as_view(), name='display-all-products'),
    path('products/view/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('products/purchase/<int:pk>/', PurchaseView.as_view(), name='purchase-product'),

]