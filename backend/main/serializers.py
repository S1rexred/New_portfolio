from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Project
class ProjectSerializer(ModelSerializer):
	image = serializers.SerializerMethodField()
	class Meta:
		model=Project
		fields=['title','short_descr','image','full_descr','yt_link','git_link','created_at','id']
	def get_image(self,obj):
		return "http://127.0.0.1:8000"+obj.image.url