# Etapa 1: Build de la aplicación React
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración e instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar todo el código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir con nginx (imagen ligera)
FROM nginx:alpine

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
