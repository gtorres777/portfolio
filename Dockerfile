FROM node:16-alpine
WORKDIR '/app'
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
