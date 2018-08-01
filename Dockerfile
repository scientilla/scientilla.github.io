FROM node:8

WORKDIR ./

COPY . .

RUN npm install

EXPOSE 8080

CMD node server.js