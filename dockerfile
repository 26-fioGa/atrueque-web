#Download Node Alpine image
FROM node:16.20.2 As build

#Setup the working directory
WORKDIR /usr/src/ng-app

#Copy package.json
COPY package.json package-lock.json ./

#Install dependencies
RUN npm install

#Copy other files and folder to working directory
COPY . .

#Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.25.1

#Copy built angular files to NGINX HTML folder
COPY --from=build /usr/src/ng-app/dist/atrueque-web/ /usr/share/nginx/html