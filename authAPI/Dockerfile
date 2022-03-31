FROM node:13.12.0-alpine AS authapi_build
WORKDIR /authapi
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
RUN node index.js

FROM nginx AS nginx_build
COPY --from=authapi_build /app/build /usr/share/nginx/html
EXPOSE 80