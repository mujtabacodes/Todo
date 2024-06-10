FROM node:20

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD ["node", "dist/index.js"]