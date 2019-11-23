FROM node:latest

WORKDIR /app

VOLUME /app
EXPOSE 3000

RUN npm install

CMD ["npx", "nuxt", "-H", "0.0.0.0"]

