FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD [ "npm", "start" ]