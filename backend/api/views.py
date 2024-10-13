from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogPostSerializer


class BlogPostListCreate(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer