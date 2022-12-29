# syntax=docker/dockerfile:1

FROM node:18.12.1-alpine3.16
WORKDIR /app
RUN npm install -g npm@9.2.0
COPY package.json .
RUN npm install
COPY . .
CMD [ "node", "index.js" ]