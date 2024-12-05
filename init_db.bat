#!/bin/bash

echo "Iniciando la configuración de la base de datos PostgreSQL para el proyecto."

read -p "Introduce el nombre de la base de datos: " DB_NAME
read -p "Introduce el nombre del usuario: " DB_USER
read -s -p "Introduce la contraseña del usuario: " DB_PASSWORD
echo ""

echo "Creando base de datos y usuario..."
psql -U postgres -c "CREATE DATABASE $DB_NAME;"
psql -U postgres -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

echo "Creando archivo .env con las credenciales..."
cat <<EOT > .env
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASSWORD
DB_HOST=localhost
DB_PORT=5432
EOT

echo "Base de datos configurada y credenciales guardadas en .env."
