from django.contrib import admin
from django.urls import path, include
from apps.myapp.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myapp/', include('apps.myapp.urls')),
    path('', index, name='home'),
]
