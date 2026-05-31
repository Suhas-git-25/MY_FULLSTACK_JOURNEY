# AUTHENTICATION AND AUTHORIZATION FUNDAMENTALS

## Overview

This project is a backend authentication system built using **Node.js**, **Express.js**, and **JSON Web Tokens (JWT)**.

The primary goal of this project was to understand how authentication and authorization work in modern web applications. The application allows users to log in, receive a JWT access token, and access protected routes based on their assigned role.

This project marks an important step in my Full Stack Development journey, where I focused on learning backend security concepts before integrating them into larger full-stack applications.

---

## Features

* User Login Authentication
* JWT Access Token Generation
* Role-Based Authorization
* Protected API Routes
* Faculty-Only Route Access
* Express Middleware Authentication
* REST API Development
* CORS Configuration
* Request Body Parsing

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Authentication

* JSON Web Token (JWT)

### Middleware

* Body Parser
* CORS

---

## Authentication Flow

1. User sends username and password.
2. Server validates credentials.
3. JWT Access Token is generated.
4. Token is returned to the client.
5. Client sends the token in the Authorization header.
6. Middleware verifies the token.
7. Access is granted based on user role.

Example Header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## API Endpoints

### Public Route

```http
GET /
```

Returns a welcome message.

---

### Login

```http
POST /login
```

Request Body:

```json
{
  "username": "prasad",
  "password": "myclz@888"
}
```

Response:

```json
{
  "message": "User successfully logged in",
  "token": "<jwt-token>"
}
```

---

### Public Route

```http
GET /anyone-can-access
```

Accessible by anyone.

---

### Protected Route

```http
GET /student-attendance
```

Access Level:

* Faculty Only

Requires:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## What I Learned

Through this project I learned:

* Building REST APIs using Express.js
* Authentication using JWT
* Creating and signing Access Tokens
* Verifying JWT Tokens
* Implementing Middleware
* Protecting Backend Routes
* Role-Based Access Control (RBAC)
* Handling Authentication Errors
* Understanding Authorization Headers
* Structuring Backend Applications

---

## Additional Authentication Concepts Studied

Apart from implementing JWT Access Token Authentication in this project, I also studied:

### Access Token Authentication

* Short-lived tokens
* Stateless authentication
* Protected route access
* Token verification using middleware

### Refresh Token Authentication

I explored the complete Refresh Token authentication flow including:

* Access Token expiration handling
* Refresh Token generation
* Refresh Token storage strategies
* Token renewal without forcing re-login
* Improved security practices
* Real-world authentication architecture used in production applications

Although Refresh Tokens are not implemented in this repository, understanding them helped me learn how scalable authentication systems are designed.

---

## Future Improvements

Planned enhancements:

* Refresh Token Implementation
* Password Hashing using bcrypt
* Database Integration (PostgreSQL / MongoDB)
* User Registration
* Logout Functionality
* Token Blacklisting
* Cookie-Based Authentication
* Full Frontend Integration using React
* Deployment on Cloud Platforms

---

## Full Stack Journey

This repository represents one of the foundational backend projects in my Full Stack Development journey.

Current Learning Path:

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* JWT Authentication
* PostgreSQL
* REST APIs

Currently Exploring:

* Refresh Token Authentication
* PERN Stack Development
* Cloud Databases
* Real-Time Applications
* AI-Powered Full Stack Applications

---

## Author

**Krishna Suhas**

Aspiring Full Stack Developer passionate about Backend Development, Authentication Systems, Databases, and AI-Powered Applications.
