from django.db import models

# Create your models here.
class Project(models.Model):
	title = models.CharField(max_length=100)
	short_descr = models.CharField(max_length=100)
	image = models.ImageField(upload_to="media/project_images")
	full_descr = models.CharField(max_length=2100)
	yt_link = models.CharField(max_length=3309)
	git_link = models.CharField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)
	def __str__(self) -> str:
		return self.title

