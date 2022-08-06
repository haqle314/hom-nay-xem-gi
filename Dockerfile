FROM node:18-alpine

USER node

ENV NODE_ENV production

COPY --chown=node:node . /hom-nay-xem-gi

WORKDIR /hom-nay-xem-gi

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]