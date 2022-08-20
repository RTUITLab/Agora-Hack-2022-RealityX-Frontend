FROM node:14.4.0-alpine3.10 AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM steebchen/nginx-spa:stable
COPY --from=build /frontend/dist /app
EXPOSE 80
CMD nginx