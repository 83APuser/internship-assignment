Backend API - JWT Authentication & Task Manager

Author: Atul Pathak
Tech Stack: Node.js, Express, MongoDB, JWT
Project Type: Internship Assignment 

Overview
This repository contains a robust backend system for user authentication and task management. 
It features a secure login/registration flow using JSON Web Tokens (JWT) and implements Role-Based Access Control (RBAC) to distinguish
between Admin and User permissions.

Core Features
Secure Auth Flow: Password hashing with bcryptjs and token-based sessions via jsonwebtoken.
Role-Based Access: Restricted endpoints (e.g., /api/tasks) that require an Admin role for full access.
Database Schema: Structured MongoDB models for Users and Tasks.
API Documentation: Pre-configured Postman collection included for rapid testing.
