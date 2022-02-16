FROM node:16.14

WORKDIR /usr/src/app

COPY package*.json ./


ENV PATH ${PATH}:/usr/src/app
ENV NODE_ENV=production
ENV ENVIRONMENT=production

RUN npm install
COPY . .
RUN npm run prod:build-server

EXPOSE 5001

CMD yarn prod:start