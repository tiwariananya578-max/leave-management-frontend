# Leave Management System - Backend

## Description
This is the Spring Boot backend for the Leave Management System.

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL

## Features

- Employee Registration
- Employee Login
- Apply Leave
- View Leave History
- Admin Dashboard
- Approve Leave
- Reject Leave

## Database

MySQL Database

Database Name:

```
leave_management
```

## Running the Application

Run the Spring Boot application.

The backend starts on:

```
http://localhost:8080
```

## REST APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /employee/register | Register Employee |
| POST | /employee/login | Employee Login |
| POST | /leave/apply | Apply Leave |
| GET | /leave/employee/{id} | Employee Leave History |
| GET | /leave/all | View All Leave Requests |
| PUT | /leave/approve/{id} | Approve Leave |
| PUT | /leave/reject/{id} | Reject Leave |
