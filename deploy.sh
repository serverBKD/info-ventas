#!/bin/bash

# Verifica si hay cambios sin commitear
if git diff-index --quiet HEAD --; then
    echo "No hay cambios para agregar."
    exit 0
fi

# Verifica si estás en la rama main
current_branch=$(git branch --show-current)
if [[ "$current_branch" != "main" ]]; then
    echo "⚠️  Estás en la rama '$current_branch'. Cambia a 'main' antes de continuar."
    exit 1
fi

# Muestra el historial reciente
git log --pretty=format:"%h, %ar : %s"

# Agrega los cambios
git add --all

# Solicita información del usuario
fecha_actual=$(LC_TIME=es_ES.UTF-8 date +"%Y%b%d" | awk '{print toupper($0)}')
read -p "Introduce la versión del commit: " commit_version
read -p "Introduce el mensaje del commit: " commit_message

# Valida entradas vacías
if [ -z "$commit_version" ] || [ -z "$commit_message" ]; then
  echo "⚠️ La versión y el mensaje no pueden estar vacíos."
  exit 1
fi

# Confirma el mensaje final
mensaje_final="$fecha_actual: $commit_version: $commit_message"
echo ""
echo "🔐 Mensaje final del commit:"
echo "$mensaje_final"
read -p "¿Confirmar commit? (s/n): " confirm
if [[ "$confirm" != "s" ]]; then
    echo "Commit cancelado."
    exit 0
fi

# Hace el commit y realiza push
git commit -m "$mensaje_final"
git push -ufv main main

# Feedback visual
echo "✅ Commit --MAIN-- correcto"
sleep 1
echo "---" >> README.md
clear
git log -1 --oneline >> README.md


# git push --set-upstream main main
# git remote set-url main git@github.com:serverBKD/info-ventas.git
# en reemplazo de la contraseña, aplica SSH

# git config --global --add safe.directory /mnt/sdb1/1dxv/info-ventas

# git branch -m main (si inicia en master)


# https://github.com/serverBKD/info-ventas.git

# git remote add main https://github.com/serverBKD/info-ventas.git

