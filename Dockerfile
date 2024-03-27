#Base image
FROM node:20.11.1-alpine as base

#Dependencies
FROM base as deps
WORKDIR /app
#Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

FROM base as development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .