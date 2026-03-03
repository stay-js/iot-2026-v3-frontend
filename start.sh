#!/bin/bash

if [ -f ".env" ]; then
    echo "A .env fájl már létezik"
else
    cp .env.example .env
fi

if ! docker volume inspect shared_pnpm >/dev/null 2>&1; then
  docker volume create shared_pnpm
fi

if ! docker volume inspect shared_composer >/dev/null 2>&1; then
  docker volume create shared_composer
fi

cd frontend && pnpm install

docker compose up -d

docker compose exec backend composer install
docker compose exec backend php artisan migrate

if [ -z "${APP_KEY}" ]; then
    docker compose exec backend php artisan key:generate
else
    echo "Az API kulcs már létezik" 
fi
