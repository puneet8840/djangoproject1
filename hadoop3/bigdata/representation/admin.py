from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from representation.models import Image,Post


# Register your models here.
class ImageAdmin(admin.ModelAdmin):
    list_display=['image','post','imagedes']
class PostAdmin(admin.ModelAdmin):
    list_display=['title','body']

admin.site.register(Image,ImageAdmin)
admin.site.register(Post,PostAdmin)
# admin.site.register(User,UserAdmin)
