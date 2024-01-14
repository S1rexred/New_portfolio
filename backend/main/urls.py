
from django.urls import path
from . import views
urlpatterns = [
    path('', views.Main.as_view()),
	path('<int:id>', views.Main.as_view()),
]
