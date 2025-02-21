from django.urls import path
from . import views

urlpatterns = [
    path('message', views.getMessages, name='getMessages'),
    path('messages', views.fetch_all_messages, name='fetch_all_messages'),
]