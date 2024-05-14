FROM node

COPY static static
COPY app.js app.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

ENTRYPOINT [ "npm","start" ]