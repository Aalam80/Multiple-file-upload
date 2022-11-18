
from django.urls import path
from .import views

urlpatterns = [

    

    path('',views.index,name='index'),
    path ('multiple_upload/',views.multiple_file,),
   
]