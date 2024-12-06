from django.apps import AppConfig

class AuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.auth'  # La ruta completa de la app
    label = 'custom_auth'  # Una etiqueta única para evitar conflictos
