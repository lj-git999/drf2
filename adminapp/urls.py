from django.urls import path

from adminapp import views

urlpatterns=[
    path('show/',views.BookAPIView.as_view()),
    path('add/',views.BookAPIView.as_view()),
    path('show/<str:id>/',views.BookAPIView.as_view()),
    path('update/<str:id>/',views.BookAPIView.as_view()),
    path('update/',views.BookAPIView.as_view()),
]