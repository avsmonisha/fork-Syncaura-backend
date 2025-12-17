# Syncaura Backend 🚀

Syncaura Backend is a mono-repository that hosts multiple independent backend services built using Node.js and Express.  
Each service handles a specific domain such as authentication, CRUD operations, leave management, and real-time communication.

The project follows a modular microservice-style architecture to ensure scalability, maintainability, and smooth team collaboration.

---

## 📁 Repository Structure

```
Syncaura-Backend/
│
├── auth-api/                # Authentication & Authorization service
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── CRUD-operations-/        # Generic CRUD APIs
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── leave_management/        # Employee Leave Management System
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── router/
│   └── server.js
│
├── realtime-chat-final/     # Real-time chat application using Socket.IO
│   ├── public/
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## 🧩 Services Overview

### 🔐 Auth API
- User registration and login
- JWT-based authentication
- Secure password handling
- Modular and scalable architecture

### 🧾 CRUD Operations
- Generic Create, Read, Update, Delete APIs
- Clean MVC structure
- Reusable controllers and routes

### 🗓 Leave Management System
- Employee leave request and approval workflow
- Role-based access control
- Middleware-driven request handling
- Business logic separation

### 💬 Real-time Chat Service
- Built using Socket.IO
- Supports real-time messaging
- Handles multiple concurrent users
- Event-driven communication

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB / SQL (service-dependent)
- Socket.IO
- JWT Authentication
- RESTful APIs

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Uptoskillssyncaura/Syncaura-backend.git
cd Syncaura-backend
```

---

### 2️⃣ Install Dependencies (Per Service)
Each service is independent. Navigate to the required folder and install dependencies:

```bash
cd auth-api
npm install
```

Repeat the same steps for other services.

---

### 3️⃣ Environment Variables
Create a `.env` file inside each service directory using `.env.example` as reference.

Example:
```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

⚠️ Never commit `.env` files to GitHub.

---

### 4️⃣ Run a Service
```bash
npm start
```
or
```bash
npm run dev
```

---

## 👥 Team Collaboration Rules

- Single Git repository for all backend services
- Each developer works only in their assigned folder
- Do NOT run `git init` inside subfolders
- Always pull latest changes before pushing

```bash
git pull origin main
```

---

## 🚫 Ignored Files

The following files are excluded using `.gitignore`:
- node_modules/
- .env
- logs
- IDE configuration files

---

## 📌 Future Enhancements

- Docker and Docker Compose support
- CI/CD pipeline integration
- API Gateway setup
- Centralized logging and monitoring
- Microservices deployment readiness

---

## 📄 License

This project is developed for educational and internal purposes.  
License information can be added if required.

---

## 🤝 Contributors

Developed and maintained by the Syncaura Backend Team.

---

⭐ If you find this project useful, consider starring the repository!
