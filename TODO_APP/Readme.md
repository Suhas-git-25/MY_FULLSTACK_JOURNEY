# PERN Todo Application

## Overview

A full-stack task management application built using the PERN stack (PostgreSQL, Express.js, React.js, and Node.js).

This project was developed to strengthen my understanding of full-stack application architecture, RESTful API development, database integration, and frontend-backend communication.

The application provides complete CRUD functionality for managing tasks while following modern web development practices.

---

## Features

### Task Management

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Real-time UI updates after operations

### Backend Features

* RESTful API architecture
* Express.js server
* PostgreSQL database integration
* Structured route handling
* Error handling and validation
* Environment variable configuration

### Frontend Features

* React-based user interface
* Component-driven architecture
* State management using React Hooks
* API communication using Axios/Fetch
* Responsive design

---

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Development Tools

* Git
* GitHub
* Postman

---

## Project Architecture

```text
Client (React)
      │
      │ HTTP Requests
      ▼
Server (Express.js)
      │
      │ SQL Queries
      ▼
PostgreSQL Database
```

---

## API Endpoints

### Get All Tasks

```http
GET /todos
```

Returns all tasks stored in the database.

---

### Create Task

```http
POST /todos
```

Request Body:

```json
{
  "description": "Learn PostgreSQL"
}
```

---

### Update Task

```http
PUT /todos/:id
```

Updates an existing task.

---

### Delete Task

```http
DELETE /todos/:id
```

Removes a task from the database.

---

## Database Schema

```sql
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

---

## Key Concepts Practiced

### Frontend

* React Components
* React Hooks
* State Management
* Form Handling
* API Consumption
* Conditional Rendering

### Backend

* Express Routing
* REST API Design
* Middleware Usage
* Error Handling
* Asynchronous Operations

### Database

* PostgreSQL Setup
* SQL Queries
* CRUD Operations
* Database Connections

### Full Stack Development

* Client-Server Communication
* JSON Data Exchange
* API Integration
* Application Architecture
* End-to-End Development Workflow

---

## Challenges Solved

During development, I worked on:

* Connecting React with Express APIs
* Managing asynchronous requests
* Synchronizing frontend state with database updates
* Handling API responses and errors
* Structuring a scalable full-stack application

---

## Future Enhancements

Potential improvements include:

* User Authentication
* JWT-Based Authorization
* Refresh Token Authentication
* Role-Based Access Control
* WebSocket-Based Real-Time Updates
* Task Categories and Tags
* Search and Filtering
* Due Dates and Reminders
* Cloud Database Integration
* Application Deployment

---

## What This Project Represents

This project represents one of the foundational milestones in my journey toward becoming a full-stack developer.

Through this application, I gained practical experience building a complete web application from database design to frontend implementation while learning how modern applications communicate across different layers of the stack.

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### PostgreSQL

Create the required database and table before running the application.

---

## Author

### Krishna Suhas

Full Stack Developer focused on building scalable web applications using modern technologies while exploring advanced backend engineering, cloud systems, and Generative AI.
