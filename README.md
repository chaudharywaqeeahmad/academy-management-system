# Academy Management System

A full **web-based management system for an academy** developed using
**React.js (Frontend)** and **Laravel (Backend)**, connected through
secure **RESTful API calls**.

This project demonstrates full-stack development skills including
frontend–backend integration, role-based authentication, and database
design.

---

## 🚀 Features

- Role-based authentication (Admin, Teacher, Student)
- Student management system
- Teacher management system
- Payroll management
- Secure API-based communication
- Modular frontend and backend architecture

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios
- HTML, CSS, JavaScript

**Backend**
- Laravel (REST API)
- PHP
- MySQL

**Other**
- API-based architecture
- MVC pattern (Laravel)

---

## 📁 Project Structure

academy-management-system/
│
├── frontend/ # React application
├── backend/ # Laravel REST API
├── database/ # Database schema / migrations
├── .gitignore
└── README.md


---

## ⚙️ Setup Instructions

### Backend (Laravel)
1. Navigate to the `backend` folder
2. Install dependencies:
   ```bash
   composer install
3. Create .env file from example:
   cp .env.example .env
4. Configure database credentials in .env
5. Run migrations:
   php artisan migrate
6. Start server:
   php artisan serve

### Frontend (React)
1. Navigate to the frontend folder
2. Install dependencies:
   npm install
3. Start development server:
   npm start

## 🔑 Demo Login Credentials

⚠️ These are demo credentials for testing purposes only.
⚠️ Real credentials and sensitive data are intentionally excluded.

### Admin
Email: admin@gmail.com
Password: Admin123

### Teacher
Email: teacher@example.com
Password: thenestacademy

### Student
Email: Student@example.com
Password: thenestacademy

Passwords are securely hashed in the database using Laravel
authentication mechanisms.

## 🔒 Security Note

1. Environment files (.env) are excluded
2. No real user data is included
3. API keys and sensitive information are not committed
4. Database contains schema/migrations only

## 👨‍💻 Author
   Waqee Ahmad

## 📌 Notes
This project is intended for educational and portfolio purposes
to demonstrate full-stack web development and API integration skills.