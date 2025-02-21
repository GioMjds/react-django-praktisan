from django.db import models

# Create your models here.
class Message(models.Model):
    message_id = models.IntegerField(primary_key=True)
    content = models.CharField(max_length=500, null=False)
    
    class Meta:
        db_table = 'messages'