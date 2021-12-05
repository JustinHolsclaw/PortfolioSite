FROM node:13.12.0-alpine AS web_build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx AS nginx_build
COPY --from=web_build /app/build /usr/share/nginx/html
EXPOSE 80
