# Practica 4 - Backend

Instrucciones mínimas de instalación y puesta en marcha (Windows - PowerShell)

1) Instalar dependencias

```powershell
# opcional: activar pnpm si no lo tienes
corepack enable; corepack prepare pnpm@latest --activate
pnpm install
```

2) Crear .env a partir del ejemplo y editar las variables importantes (ej.: MONGO_URL, JWT_SECRET)

```powershell
copy .env.example .env
# editar .env con tu editor favorito
```

3) Ejecutar en desarrollo

```powershell
pnpm run dev
```

4) Compilar y ejecutar (producción/local sin watch)

```powershell
pnpm run build
pnpm run start
```