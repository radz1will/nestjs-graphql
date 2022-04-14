FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine
USER root
RUN apk add --no-cache bash
WORKDIR /app
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/dist/ /app/dist/
USER node

EXPOSE 3000

ENTRYPOINT "node dist/main.js"
