FROM node:14.16.1-alpine3.13

WORKDIR /usr/src/app

COPY package.json ./
COPY dist ./dist

RUN yarn install --frozen-lockfile

EXPOSE 8080
CMD [ "yarn", "start" ]
