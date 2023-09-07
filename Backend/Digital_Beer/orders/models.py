from django.db import models

statusEnum = (
    ("PENDING", "pending"),
    ("DELIVERED", "delivered")
)

#SECCION 11 CAP 92
class Order(models.Model):
    table = models.ForeignKey('tables.Table', on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey('products.Product', on_delete=models.SET_NULL, null=True, blank=True)
    state = models.CharField(max_length=255, choices=statusEnum)
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)

    def __str__(self) -> str:
        return str(self.table)
