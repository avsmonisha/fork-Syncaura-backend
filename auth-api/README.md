# Auth API

Express + MongoDB auth API with:
- JWT access/refresh tokens
- Roles (user, admin, manager)
- Register, login, refresh
- Forgot/reset password via email token
- Change password via 6-digit OTP printed to console

## Run

1. npm install
2. Create .env (see .env example)
3. Start MongoDB locally or point MONGO_URI to your cluster
4. npm run dev

## Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh
- POST /api/auth/request-password-otp (auth)
- POST /api/auth/change-password-otp (auth) { otp, newPassword }
- POST /api/auth/forgot-password
- POST /api/auth/reset-password { token, newPassword }
- POST /api/auth/change-password (auth) { currentPassword, newPassword }
- GET /api/auth/admin (auth, admin role)

