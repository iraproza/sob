FROM node:14.16.1-buster

WORKDIR /var/www/
COPY . /var/www/
RUN npm i
WORKDIR /var/www/frontend
RUN npm i
WORKDIR /var/www/
ENTRYPOINT [ "npm", "run", "work" ]
