FROM node:12.13.0-stretch

ENV RUN_DIR /app
WORKDIR $RUN_DIR

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "start"]
