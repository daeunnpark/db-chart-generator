FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . ./
EXPOSE 3000
CMD [ “npm”, “start” ]
