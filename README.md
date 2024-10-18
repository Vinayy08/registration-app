# Registration App

A simple registration application built using Node.js and MySQL for the backend and HTML/CSS/JavaScript for the frontend. This app allows users to register, view registrations, update their information, and delete their accounts.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/registration-app.git
   cd registration-app/backend
2. Install dependencies:
    ```bash
    npm install
3. Create a .env file in the backend directory and add your database configuration:
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_DATABASE=your_database_name
4. Start the backend server:
     ```bash
     node app.js

## Frontend
Open the index.html file located in the frontend directory in your web browser. You can also run it on a local server like Live Server or any static file server.

## Usage
Use the provided HTML form in the frontend to register a new user. Fill in all required fields and submit the form. You can view, update, or delete registrations using tools like Postman or directly through the API endpoints.

## API Endpoints
Method	Endpoint	Description
POST	/register	Register a new user
GET	/registrations	Get all registered users
PUT	/register/  Update user information by ID
DELETE	/register/ Delete user by ID

## Technologies Used
Node.js
Express.js
MySQL
HTML/CSS/JavaScript
dotenv
body-parser
cors
  
