from django.shortcuts import render,redirect
from django.contrib.auth.hashers import make_password
from . import forms
from . import models
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator,PageNotAnInteger,EmptyPage

# Create your views here.
def signup(request):
    if request.method == "GET":
        form = forms.SignUp()
        return render(request, 'representation/signup.html', {'form': form})
    elif request.method=="POST":
        form=forms.SignUp(request.POST)
        if form.is_valid():
            obj=form.save(commit=False)
            obj.save()


        return redirect('/')

def front(request):
    return render(request,'representation/front.html')
@login_required
def typewriter(request):
    return render(request,'representation/typewriter.html')


updated_page=1
@login_required
def learning(request):
    posts=models.Post.objects.all().order_by('id')
    paginator=Paginator(posts,1)
    page_num=request.GET.get('page')



    try:
        post=paginator.page(page_num)
        globals()['updated_page']=page_num

        images=post[0].images.all()

        paginator_img=Paginator(images,1)
        image_num=request.GET.get('image')
        try:
            image=paginator_img.page(image_num)
        except PageNotAnInteger:
            image=paginator_img.page(1)
        except EmptyPage:
            image=paginator_img.page(paginator_img.num_pages)
    except PageNotAnInteger:

        post=paginator.page(globals()['updated_page'])
        images=post[0].images.all()

        paginator_img=Paginator(images,1)
        image_num=request.GET.get('image')
        try:
            image=paginator_img.page(image_num)
        except PageNotAnInteger:
            image=paginator_img.page(1)
            # print(image[0].image)
        except EmptyPage:
            image=paginator_img.page(paginator_img.num_pages)

    except EmptyPage:
        post=paginator.page(paginator.num_pages)
        images=post[0].images.all()

        paginator_img=Paginator(images,1)
        image_num=request.GET.get('image')
        try:
            image=paginator_img.page(image_num)
        except PageNotAnInteger:
            image=paginator_img.page(1)
        except EmptyPage:
            image=paginator_img.page(paginator_img.num_pages)

    return render(request,'representation/learning.html',{'post_list':post,'image':image})
