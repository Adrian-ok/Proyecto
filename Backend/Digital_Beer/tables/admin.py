from django.contrib import admin

#SECCION 10 CAP 83
from tables.models import Table

@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    pass