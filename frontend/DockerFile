FROM node:16.14-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . /usr/app/

CMD [ "npm", "run", "dev" ]

EXPOSE 3000