FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG PUBLIC_SITE_ENV
ARG PUBLIC_SITE_ORIGIN
ARG PUBLIC_SUPPORT_EMAIL
ARG PUBLIC_SECURITY_EMAIL
ARG PUBLIC_GOOGLE_SITE_VERIFICATION
ARG PUBLIC_BING_SITE_VERIFICATION
ARG PUBLIC_ANALYTICS_ENDPOINT

RUN case "$PUBLIC_SITE_ENV" in \
      production|preview) npm run verify ;; \
      *) echo "PUBLIC_SITE_ENV must be production or preview" >&2; exit 1 ;; \
    esac

FROM nginxinc/nginx-unprivileged:1.30-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
