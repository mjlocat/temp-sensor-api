FROM node:16.13.2-bullseye

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY * /app/

CMD ["node", "server.js"]
