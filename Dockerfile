FROM node:8

WORKDIR ./

COPY . .

RUN npm install

EXPOSE 8090

CMD node server.js