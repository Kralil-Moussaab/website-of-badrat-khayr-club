from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ["id", "firstn", "lastn", "email", "phone", "academiclevel", "speciality", "faculty", "hobby", "club", "published_date"]


#firstn = models.CharField(max_length=255)
#lastn = models.CharField(max_length=255)
#email = models.CharField(max_length=255)
#phone = models.CharField(max_length=255)
#academiclevel = models.CharField(max_length=255)
#speciality = models.CharField(max_length=255)
#faculty = models.CharField(max_length=255)
#hobby = models.CharField(max_length=255)
#club = models.CharField(max_length=255)