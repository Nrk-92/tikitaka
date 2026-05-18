FROM node:23.6.1-alpine3.20
WORKDIR /app/backend
COPY ./backend ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]