FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install --force
COPY . .

## Expose Port
EXPOSE 5173
CMD  ["npm", "run", "dev"]