from django.contrib import admin
from categories.models import Category

# Register your models here.
#SECCION 7 CAP 56
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass