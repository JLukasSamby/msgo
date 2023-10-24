FROM node:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4050

CMD [ "npm", "run", "start:prod"]