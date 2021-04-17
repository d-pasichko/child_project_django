# users/urls.py
from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^create/$', create_user),
    url(r'^generate_tocken/$', authenticate_user),
    url(r'^get_user/$', get_user),
    url(r'^change_user/$', update_user),
]