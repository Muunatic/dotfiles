FROM node:18
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
RUN npm cache clean --force
ENV NODE_ENV="production"
COPY . .
CMD [ "npm", "run", "start" ]
