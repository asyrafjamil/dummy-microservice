FROM node:14.17

WORKDIR /app

COPY package.json /app
RUN npm install
RUN npm install -g nodemon
COPY . /app

CMD nodemon server.js

EXPOSE 3030