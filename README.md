<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NestJS Pokemon API

- Docker
- MongoDB
- NestJS v10

### Ejecutar en desarrollo

1. Clonar el repositorio
2. Instalar dependencias

```
pnpm install
```

3. Instalar NestJS CLI

```
pnpm install -g @nest/cli
```

4. Levantar contenedor de MongoDB

```
docker compose up -d
```

5. Poblar base de datos con semilla

```
http://localhost:3000/api/v2/seed
```
