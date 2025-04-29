from django.db import models

# Create your models here.
class StudentModel(models.Model):
    name = models.CharField(max_length=50)
    dept = models.CharField(max_length=50)
    roll = models.IntegerField()

def __str__(self):
    return self.name