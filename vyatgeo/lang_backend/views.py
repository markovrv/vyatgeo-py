from django.shortcuts import render

def index(request):
    return render(request, 'lang_backend/index.html')
