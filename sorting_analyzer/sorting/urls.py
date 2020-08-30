from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('merge_sort/', views.merge_sort, name="merge_sort"),
    path('quick_sort/', views.quick_sort, name="quick_sort"),
    path('selection_sort/', views.selection_sort, name="selection_sort"),
    path('bubble_sort/', views.bubble_sort, name="bubble_sort"),
]
