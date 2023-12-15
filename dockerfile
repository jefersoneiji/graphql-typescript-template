FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . . 
RUN apk add git
CMD ["yarn", "start"]
EXPOSE 4000