FROM node:7
WORKDIR /app
COPY pachage.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 9000