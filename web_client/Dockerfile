FROM node:latest

COPY package.json /tmp/package.json
RUN cd /tmp && npm install --no-progress --ignore-optional
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app
COPY . /app

EXPOSE 8081

CMD ["npm", "start"]
