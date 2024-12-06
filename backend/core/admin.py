from django.contrib import admin
from .models import User, Sport, Event, UserPrediction, Statistic

admin.site.register(User)
admin.site.register(Sport)
admin.site.register(Event)
admin.site.register(UserPrediction)
admin.site.register(Statistic)
