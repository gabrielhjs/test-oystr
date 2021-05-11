FROM node:14.16.1-alpine3.13

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY dist ./dist

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD node dist/server.js --bind 0.0.0.0:$PORT