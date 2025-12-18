RBAC Backend – Role-Based Access Control (Node.js)

A clean, production-ready Role-Based Access Control (RBAC) backend built with Node.js, Express, MongoDB, and JWT.
This project demonstrates how to securely manage user roles and protect APIs based on permissions.

--------------------------------------------------

FEATURES

- User Registration & Login (JWT Authentication)
- Role-Based Access Control (RBAC)
- Roles Supported:
  - Admin
  - Co-Admin
  - Member
- Secure API access using middleware
- Clean and scalable folder structure
- Simple index.html for API testing

--------------------------------------------------

TECH STACK

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv
- CORS

--------------------------------------------------

PROJECT STRUCTURE

rbac-backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── roles.js
│   │
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── roles.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── protected.routes.js
│   │
│   ├── utils/
│   │   └── generateToken.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── index.html

--------------------------------------------------

SETUP INSTRUCTIONS

1. Clone Repository

git clone <your-repo-url>
cd rbac-backend

2. Install Dependencies

npm install

3. Environment Variables

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/rbac_db
JWT_SECRET=supersecretkey

--------------------------------------------------

RUN THE APPLICATION

npm run dev

Server will start on:
http://localhost:5000

--------------------------------------------------

ROLES & PERMISSIONS

API Route        | Admin | Co-Admin | Member
---------------------------------------------
/api/profile     | YES   | YES      | YES
/api/manage      | YES   | YES      | NO
/api/admin       | YES   | NO       | NO

--------------------------------------------------

API ENDPOINTS

Authentication

Register
POST /api/auth/register

Request Body:
{
  name: "John",
  email: "john@test.com",
  password: "123456"
}

Login
POST /api/auth/login

--------------------------------------------------

Protected Routes (JWT Required)

GET /api/profile   -> All logged-in users
GET /api/manage    -> Admin, Co-Admin
GET /api/admin     -> Admin only

--------------------------------------------------

TESTING WITH index.html

1. Start the backend server
2. Open index.html in browser
3. Register or Login
4. Call protected APIs
5. JWT token is stored in browser localStorage

--------------------------------------------------

CHANGING USER ROLE (ADMIN ONLY)

Update role directly in MongoDB:

db.users.updateOne(
  { email: "user@test.com" },
  { $set: { role: "admin" } }
)

--------------------------------------------------

RBAC FLOW

1. User logs in
2. JWT token is issued with user role
3. Token is verified via auth middleware
4. Role-based middleware checks permissions
5. API access is granted or denied

--------------------------------------------------

FUTURE ENHANCEMENTS

- Permission-based RBAC (fine-grained)
- Admin UI for role management
- Swagger API documentation
- Refresh tokens
- Multi-tenant RBAC support

--------------------------------------------------

LICENSE

MIT License

--------------------------------------------------

AUTHOR

Anil A
Backend Developer | Node.js | APIs | System Design
