FROM node:18.16.0-alpine AS builder
WORKDIR /app
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci --legacy-peer-deps
# Production build
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.24-alpine as production
WORKDIR /app
ENV NODE_ENV production
# Copy built assets from the builder container
COPY --from=builder /app/build /usr/share/nginx/html
# Add routing config to nginx
COPY nginx.conf /etc/nginx/conf.d/app-default.conf
EXPOSE 3000
# add user
USER 10014
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
