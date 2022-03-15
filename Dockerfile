FROM node:16 as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build:single-spa:mf-africa

FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist/mf-africa /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80