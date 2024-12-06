from django.db import models
from django.contrib.auth.models import AbstractUser


# Base model to handle created_at and updated_at timestamps
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp for creation
    updated_at = models.DateTimeField(auto_now=True)  # Timestamp for last update

    class Meta:
        abstract = True


# User model extending Django's AbstractUser
class User(AbstractUser, BaseModel):
    email = models.EmailField(unique=True)  # Unique email field for users
    password = models.CharField(max_length=128)  # Encrypted password managed by Django

    def __str__(self):
        return self.username


# Sport model to categorize sports (currently just football)
class Sport(BaseModel):
    name = models.CharField(max_length=50, unique=True)  # Name of the sport (e.g., Football)

    def __str__(self):
        return self.name


# Event model to represent sports events
class Event(BaseModel):
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE, related_name='events')  # Related sport
    name = models.CharField(max_length=100)  # Name of the event (e.g., Real Madrid vs Barcelona)
    start_date = models.DateTimeField()  # Start date and time of the event
    location = models.CharField(max_length=100, blank=True, null=True)  # Optional location of the event

    def __str__(self):
        return f"{self.name} ({self.sport.name})"


# UserPrediction model to store user predictions for events
class UserPrediction(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='predictions')  # Related user
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='predictions')  # Related event
    prediction = models.JSONField()  # JSON field to store prediction details

    def __str__(self):
        return f"Prediction by {self.user.username} for {self.event.name}"


# Statistic model to store historical or live statistics for events
class Statistic(BaseModel):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='statistics')  # Related event
    data = models.JSONField()  # JSON field to store statistical data

    def __str__(self):
        return f"Statistics for {self.event.name}"
