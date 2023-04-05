FROM node:14.20-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY FrontendSolutions/package.json /app
RUN npm install
COPY FrontendSolutions /app
RUN npm i && npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/hmsauth /usr/share/nginx/html
