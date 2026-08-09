FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG PUBLIC_SITE_ENV
ARG PUBLIC_SITE_ORIGIN
ARG PUBLIC_SUPPORT_EMAIL
ARG PUBLIC_SECURITY_EMAIL

RUN test "$PUBLIC_SITE_ENV" = "production" && npm run verify

FROM nginxinc/nginx-unprivileged:1.30-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
