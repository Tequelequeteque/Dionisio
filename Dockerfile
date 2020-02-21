FROM node:alpine
WORKDIR /usr/api
COPY . .
RUN yarn
CMD ["yarn", "start"]

