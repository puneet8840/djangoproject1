from django import forms
from django.contrib.auth.models import User
from representation.models import Image


class SignUp(forms.ModelForm):
    password=forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = User
        fields= ['username','first_name','last_name','email','password']
