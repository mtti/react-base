FROM node:11.8-stretch

ENV RUN_DIR /app
WORKDIR $RUN_DIR

COPY package.json .
RUN npm install
COPY . .
RUN npm run client:build

CMD     ["npm", "start"]
