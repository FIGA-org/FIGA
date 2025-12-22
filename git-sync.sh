#!/bin/bash

# Este comando detiene el script si algún paso falla.
set -e

echo ">>> Sincronizando con la rama 'develop'..."
git checkout develop
git pull origin develop

# Pide al usuario el nombre para la nueva rama
echo -n ">>> Escribe el nombre para tu nueva rama (ej: fix-login-button) y presiona Enter: "
read BRANCH_NAME

# Verifica que el nombre de la rama no esté vacío
if [ -z "$BRANCH_NAME" ]; then
  echo "❌ Error: El nombre de la rama no puede estar vacío."
  exit 1
fi

# Crea la nueva rama
git checkout -b $BRANCH_NAME

echo ">>> Rama '$BRANCH_NAME' creada y lista."
echo ""
echo ">>> Poniendo todos tus cambios en preparación..."
git add .

# Pide al usuario el mensaje para el commit
echo -n ">>> Escribe el mensaje de tu commit (ej: Arregla el botón de login) y presiona Enter: "
read COMMIT_MESSAGE

# Verifica que el mensaje no esté vacío
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "❌ Error: El mensaje del commit no puede estar vacío."
  exit 1
fi

# Crea el commit con el mensaje del usuario
git commit -m "$COMMIT_MESSAGE"

echo ">>> Subiendo la rama '$BRANCH_NAME' a GitHub..."
git push -u origin $BRANCH_NAME

echo ""
echo "✅ ¡Listo! Tu rama '$BRANCH_NAME' ha sido subida a GitHub."
echo "Ahora ve a GitHub para crear el Pull Request."