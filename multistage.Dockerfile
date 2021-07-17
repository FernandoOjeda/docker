FROM node:14 AS Build
COPY package*.json ./
WORKDIR /usr/src/app
COPY . .
RUN npm install

FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8001
CMD [ "node", "server.js", "--port=8001", "--host=0.0.0.0" ]
