# BLOG API EXPRESS

This repository has an API for a blog, where users can post and react with comments. To use the API, users will need to register. If they already have an account, they will need to log in to generate a token that authorizes them to use exclusive CRUD tools.

## Technologies

Node.js

Express.js

TypeScript

Prisma ORM

PostgreSQL

Swagger UI

Docker

## Prerequisites

Node.js 18+

npm or yarn

Docker and Docker Compose

## Features

Express server with organized routes

TypeScript for static typing

Prisma ORM for database management

`.env.example` file for environment configuration

Docker for easy deployment of PostgreSQL

Configured linter (ESLint)

Complete route documentation with Swagger UI

 ## Instructions

1. Clone the repository:
```
git clone https://github.com/analuizamelodev/api-express.git
cd api-express
```
2. Install the dependencies:
```
npm install
```
3. Configure the Docker database:
```
docker-compose up -d
```
4. Create a .env file based on .env.example:
```
DATABASE_URL="postgresql://user:password@localhost:5432/db"
PORT=3000
```
5. Generate the Prisma client:
```
npx prisma generate
```
6. Run the migrations:
```
npx prisma migrate dev
```
7. Start the application:
```
npm run dev
```
## Endpoints

The server will run on:

➡️ http://localhost:3000

Swagger available at:

➡️ http://localhost:3000/api-docs

The endpoints follow the REST standard and are versioned:

## Authentication

`POST /authentication/registration` Registers a new user

`POST /authentication/login` Login and JWT token creation

## Publication

`POST /publication` - Create publication

`GET /publication` - Search for all publications

`GET /publication/{id}` - Search for publications by ID

`PUT /publication/{id}` - Update publication

`DELETE /publication/{id}` - Remove publication

## Comments

`POST /comment` - Create comment

`GET /comment` - Search for all

`GET /comment/{id}` - Search by ID

`DELETE /comment/{id}` - Delete comment

## Author

Developed by Ana Luiza Melo
GitHub: https://github.com/analuizamelodev
