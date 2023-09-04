from django.db import models

#SECCION 10 CAP 83
class Table(models.Model):
    number = models.IntegerField(unique=True)

    def __str__(self):
        return str(self.number)