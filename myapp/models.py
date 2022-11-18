from django.db import models

# Create your models here.

class filemodel(models.Model):
    file=models.FileField(upload_to="file/")
    def __str__(self):
      return str(self.pk)



# class imagemodel(models.Model):
#     file= models.ImageField(upload_to=("img/"))