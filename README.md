# Role-Based Access Control (RBAC) Application

## Description
This project implements a **Role-Based Access Control (RBAC)** system using Node.js, Express, and MongoDB. It enables role-specific access to application routes and features, ensuring secure and organized user interaction.

Users are assigned roles like `Admin`, `Manager`, or `User`, and can only access functionalities designated for their role. JWT is used for secure authentication, and bcrypt is implemented for password hashing.

## Features
- **User Authentication**: Login and registration system with password hashing.
- **Role-Based Authorization**: Protect routes based on user roles.
- **Secure Token Management**: JSON Web Tokens (JWT) for authentication.
- **Reusable Middleware**: Centralized logic for authentication and authorization.
- **Extensible Design**: Easily add new roles and permissions.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens), bcrypt.js
- **Environment Variables**: dotenv

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/rbac-app.git
   cd rbac-app
