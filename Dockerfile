FROM node:23

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

COPY . ./

RUN npx prisma generate --schema=prisma/schema.prisma

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
