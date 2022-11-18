from django.contrib import admin
from .models import  filemodel
from django.contrib.auth.models import Group


# Register your models here.



class FileAdminpost(admin.ModelAdmin):
    list_display= ('file',)
    list_per_page = 5
    search_fields=('file',)
    list_filter=('file',)






admin.site.register(filemodel,FileAdminpost)
admin.site.unregister(Group)

