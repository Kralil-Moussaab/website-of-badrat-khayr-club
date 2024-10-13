from django.db import models

# Create your models here.
class BlogPost(models.Model):
    firstn = models.CharField(max_length=255)
    lastn = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    academiclevel = models.CharField(max_length=255)
    speciality = models.CharField(max_length=255)
    faculty = models.CharField(max_length=255)
    hobby = models.CharField(max_length=255)
    club = models.CharField(max_length=255)
    
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.firstn} - {self.lastn}'