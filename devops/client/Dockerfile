# Use official Node.js image as a build stage
FROM node:22 AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
RUN npm run build

# Use nginx to serve the app
FROM nginx:alpine

# Copy default Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to the Nginx HTML directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
