FROM node:lts-bookworm-slim
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000 3001
CMD npm start