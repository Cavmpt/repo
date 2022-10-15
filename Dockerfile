FROM node:alpine

RUN npm i -g npm

EXPOSE 3000

RUN apk update
RUN apk --no-cache --virtual build-dependencies add \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    python3 \
    make \
    g++ 

WORKDIR /home/nextjs/app

COPY . .

RUN npm install --no-optional
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

CMD [ "npm", "run", "dev" ]