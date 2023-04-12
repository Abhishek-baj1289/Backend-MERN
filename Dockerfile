FROM node:16.17.1-alpine3.15
# RUN addgroup app && adduser -S -G app app
# USER app
COPY . .
# WORKDIR /app
RUN ["npm", "install"]
# RUN ["node", "server.js"]
WORKDIR /frontend
RUN ["npm", "install"]
# RUN ["npm", "run", "dev"]
EXPOSE 5173
WORKDIR /
EXPOSE 3500

#how the fuck