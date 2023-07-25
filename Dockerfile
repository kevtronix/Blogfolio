# Stage 1 - the build process
FROM node:20-alpine as build
WORKDIR /usr/src/app 
COPY package.json ./
RUN npm install
COPY . ./   
RUN npm run build 


# Stage 2 - the production environment
FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD /bin/bash -c "\
envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > \
/etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"