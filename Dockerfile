FROM node
RUN apt-get update && apt-get upgrade -y
RUN apt-get install libssl-dev
WORKDIR /app
RUN npm install -g npm@9.2.0
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "node", "index.js" ]