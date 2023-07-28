# Stage 1 - the build process
FROM node:20-alpine as build
WORKDIR /usr/src/app 
COPY package*.json ./
RUN npm install 
COPY .  ./ 
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL 
RUN npm run build 



# Stage 2 - the production environment
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=build /usr/src/app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0 
EXPOSE 8080


CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"