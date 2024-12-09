from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.views import LoginView, LogoutView
from django.views import View
from .forms import RegisterForm, LoginForm
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
import json
from django.contrib.auth import logout

class RegisterView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def post(self, request):
        try:
            data = json.loads(request.body)  # Cargar datos JSON del cuerpo de la solicitud
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

        form = RegisterForm(data)  # Pasar los datos JSON al formulario
        if form.is_valid():
            user = form.save()
            return JsonResponse({'message': 'User registered successfully'}, status=201)
        return JsonResponse({'errors': form.errors}, status=400)

# Vista de login
class CustomLoginView(LoginView):
    authentication_form = LoginForm
    template_name = 'auth/login.html'

@method_decorator(csrf_exempt, name='dispatch')
class CustomLogoutView(View):
    def post(self, request):
        logout(request)  # Cierra la sesión del usuario
        return JsonResponse({'message': 'Logged out successfully'}, status=200)
