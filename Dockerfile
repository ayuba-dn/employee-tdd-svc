FROM node:12-alpine
LABEL Employee Service by Ayuba Dauda
COPY . /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./
CMD ["node", "build/index.js"]
EXPOSE 8000
