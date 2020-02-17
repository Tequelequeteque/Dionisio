FROM node:alpine
WORKDIR /usr/api
COPY . .
RUN yarn
EXPOSE 3333
CMD ["yarn", "start"]

