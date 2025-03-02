from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView # type: ignore
from django.urls import path
from . import views

urlpatterns = [
    path('token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes', views.get_notes, name='get_notes'),
]