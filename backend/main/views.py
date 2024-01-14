from django.shortcuts import render
from rest_framework.views import APIView
from .models import Project
from .serializers import ProjectSerializer
from rest_framework.response import Response
class Main(APIView):
	def get(self,request,*args,**kwargs):
		id = kwargs.get("id",None)
		if id is not None:
			project = Project.objects.get(id=id)
			single_seri = ProjectSerializer(project).data
			return Response(single_seri)
		projects = Project.objects.all()
		three_main =Project.objects.order_by('-id')[:3]
		all_serializer = ProjectSerializer(projects,many=True).data
		three_main_serializer  =ProjectSerializer(three_main,many=True).data
		return Response({
			"all":all_serializer,
			"main":three_main_serializer
		})
	