FROM node:20.4.0

WORKDIR /user/src/app

COPY package.json yarn.lock ./

COPY . .

RUN yarn install

ENV HOST 0.0.0.0
ENV PORT 3000

CMD ["yarn","dev","--host","0.0.0.0"]