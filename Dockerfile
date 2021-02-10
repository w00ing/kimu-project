# STAGE 1 : Compile typescript
FROM node:12-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . ./

RUN npm run build

# STAGE 2 : Clean up node_modules
FROM node:12-alpine AS deps

WORKDIR /app

COPY package*.json .
RUN npm install --production
RUN npm install aws-sdk


# STAGE 3 : Deploy
FROM node:12-alpine

WORKDIR /app

COPY --from=deps /app/node_modules node_modules
COPY --from=build /app/dist dist

ENV PORT=3005
ENV NODE_PATH=./dist

EXPOSE 3005

# CMD ["npm", "run", "start:prod"]

CMD ["node", "./dist/src/server.js"]