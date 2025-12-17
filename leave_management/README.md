# Leave Management API (Syncaura)

This module is part of **Syncaura**, an all‑in‑one productivity and work‑management platform. The Leave Management API allows users to apply for leave and enables Admin / Co‑Admin roles to review, approve, or reject leave requests using **JWT authentication and role‑based access control (RBAC)**.

---

## 🚀 Features

* User registration and login with JWT authentication
* Role‑based access control (User, Admin, Co‑Admin)
* Users can apply for leave
* Users can view their own leave requests
* Admin & Co‑Admin can view all leave requests
* Admin & Co‑Admin can approve or reject leave requests
* Leave audit tracking (`reviewedBy`, `reviewedAt`)
* MongoDB Atlas integration
* Logging with Morgan

---

## 🛠 Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Atlas)
* **Authentication**: JWT (JSON Web Token)
* **Password Security**: bcryptjs
* **Logging**: Morgan

---

## 📁 Project Structure

```
backend_leave/
│── controller/
│   ├── authController.js
│   └── leaveController.js
│
│── middleware/
│   └── authMiddleware.js
│
│── model/
│   ├── User.js
│   └── Leave.js
│
│── router/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── leaveRoutes.js
│
│── config/
│   └── dbconnect.js
│
│── logs/
│   └── access.log
│
│── .env
│── server.js
│── package.json
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=4000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/leavedb
JWT_TOKEN=Leavemanagement
```

---

## ▶️ Running the Server

```bash
npm install
node server.js
```

Server will start at:

```
http://localhost:4000
```

---

## 🔑 Authentication APIs

### Register User

```
POST /api/auth/register
```

**Body:**

```json
{
  "name": "Jeevan",
  "email": "jeevan@gmail.com",
  "password": "123456",
  "role": "user"
}
```

---

### Login User

```
POST /api/auth/login
```

**Response:**

```json
{
  "token": "JWT_TOKEN_HERE"
}
```

---

## 🏖 Leave Management APIs

### Apply Leave (User)

```
POST /api/leaves/apply
```

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Body:**

```json
{
  "reason": "Medical Leave",
  "fromDate": "2025-01-10",
  "toDate": "2025-01-12"
}
```

---

### View My Leaves (User)

```
GET /api/leaves/my
```

---

### View All Leaves (Admin / Co‑Admin)

```
GET /api/leaves/all
```

---

### Approve Leave (Admin / Co‑Admin)

```
PUT /api/leaves/:id/approve
```

---

### Reject Leave (Admin / Co‑Admin)

```
PUT /api/leaves/:id/reject
```

---

## 🧠 Role‑Based Access Control

* **User** → Apply & view own leaves
* **Admin / Co‑Admin** → View all leaves, approve/reject

RBAC is enforced using JWT payload (`req.user.role`).

---

## 📊 Leave Status Flow

```
Pending → Approved / Rejected
```

Each action stores:

* `reviewedBy` → Admin / Co‑Admin ID
* `reviewedAt` → Timestamp

---

## 🎯 Interview Explanation

> “I implemented a Leave Management module using Node.js, Express, MongoDB, and JWT. The system supports role‑based access where users apply for leave and admins or co‑admins can approve or reject requests. JWT middleware secures the APIs and ensures proper authorization.”

---

## 🔮 Future Enhancements

* Email / in‑app notifications
* Leave analytics dashboard
* Attendance integration
* Pagination & filtering
* Admin comments on rejection

---

## 👨‍💻 Author

**Jeevanraj L**
MERN Stack Intern
Project: Syncaura

---

✅ Production‑ready, scalable, and internship‑level project
