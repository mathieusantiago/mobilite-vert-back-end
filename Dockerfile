FROM node
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install nodemon --save
COPY . .
EXPOSE 5000
CMD ["npm", "start"]