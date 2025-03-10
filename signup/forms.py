from django import forms
from . import models

class SignUpForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
    password1 = forms.CharField(widget=forms.PasswordInput, label='Confirm Password')
    
    def clean_email(self):
        email = self.cleaned_data.get("email")
        try:
            models.signup.objects.get(email=email)
            raise forms.ValidationError("User already exists with that email")
        except models.signup.DoesNotExist:
            return email
        
    def clean_password1(self):
        password = self.cleaned_data.get("password")
        password1 = self.cleaned_data.get("password1")
        if password != password1:
            raise forms.ValidationError("Password confirmation does not match")
        else:
            return password
    
    def save(self):
        email = self.cleaned_data.get("email")
        password = self.cleaned_data.get("password")
        user = models.signup.objects.create_user(email, password)
        user.save()
        