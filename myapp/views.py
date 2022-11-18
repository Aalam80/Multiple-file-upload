from django.shortcuts import render
from .models import filemodel 
from django.http import JsonResponse

# Create your views here.

def multiple_file(request):
    files=request.FILES.getlist('files')
    files_list= []
    for file in files:
        files_list.append(filemodel(file=file))

    if files_list:
        filemodel.objects.bulk_create(files_list)

        print(files_list)

    return JsonResponse({"message":"success"})


def index(request):
    return render(request,'index.html')
