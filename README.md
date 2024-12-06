# React-Django Template

Esta plantilla combina Django para el backend y React para el frontend.

## Requisitos Previos

Asegúrate de tener instalados:

- [Python 3.12+](https://www.python.org/downloads/)
- [Node.js (LTS)](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)
- Git (opcional)

## Crear el entorno virtual
- Selecciona el intérprete de Python "Python: Select Interpreter" en la rueda de Manage abajo a la izquierda de VS Code.

## Activa el entorno virtual:
.\.venv\Scripts\Activate.ps1

## Con el entorno virtual activado, instala Django:
pip install django

## Ejecuta el archivo init_db.bat:
.\init_db.bat

## Instalar las siguientes dependencias:
pip install python-decouple
pip install django-cors-headers
pip uninstall psycopg psycopg2 psycopg2-binary -y
python.exe -m pip install --upgrade pip
pip install psycopg==3.2.3
pip install psycopg2-binary==2.9.10

## Aplica las migraciones iniciales:
python backend/manage.py migrate

## Verifica que el servidor funciona:
python backend/manage.py runserver

## Inicia el servidor React:
npm start

## Conectar el proyecto con un repositorio de Github:
Crear new repository desde Github
git remote add <nombre_proyecto> https://github.com/<usuario_Github>/<nombre_proyecto>
git add .
git commit -m "Inicializando el nuevo proyecto basado en la plantilla"
git push -u <nombre_proyecto> main
