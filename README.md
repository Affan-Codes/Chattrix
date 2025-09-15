# 🚀 Chattrix – Real-Time Chat Application

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://vercel.com/)
[![Deployed on Render](https://img.shields.io/badge/Backend-Render-3f3f3f?logo=render)](https://render.com/)

Chattrix is a **modern real-time chat application** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Stream API** for seamless messaging.  
It provides secure authentication, private & group chats, and a clean UI for smooth communication.

---

## ✨ Features

- 🔐 **Authentication & Authorization**

  - JWT-based auth with httpOnly cookies
  - Secure Login, Register, Logout

- 💬 **Chat System**

  - Real-time private & group chats
  - Stream API for messaging
  - Online/offline user status

- 🎨 **Frontend**

  - React + TailwindCSS
  - Protected routes with React Router
  - Responsive modern UI

- ⚙️ **Backend**

  - Express.js REST API
  - MongoDB Atlas + Mongoose
  - Auth middleware + bcrypt

- ☁️ **Deployment**
  - Backend → Render
  - Frontend → Vercel
  - Environment-based config

---

## 🛠 Tech Stack

**Frontend:** React, Vite, TailwindCSS, Axios, Stream Chat React SDK  
**Backend:** Node.js, Express, MongoDB, JWT, bcrypt, cookie-parser  
**Database:** MongoDB Atlas  
**Hosting:** Render (backend), Vercel (frontend)

---

## 📂 Project Structure

```bash
Chattrix-main/
│
├── backend/              # Express.js server
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes (auth, chat, users)
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Auth middlewares
│   └── server.js         # Entry point
│
├── frontend/             # React app
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page views (Login, Register, Chat)
│   │   ├── hooks/        # Custom hooks
│   │   └── App.jsx       # App entry point
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/Affan-Codes/rabbit.git
cd Rabbit-main
```

### 2. Install Dependencies

```
# Backend
cd backend
npm install
# Frontend
cd ../frontend
npm install
```

### 3. Environment Variables

```
Create a .env file inside the backend/ folder:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/rabbit
JWT_SECRET_KEY=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
💡 Use MongoDB Atlas and Stream for production setups.

Create a .env file inside the frontend/ folder:
VITE_STREAM_API_KEY=your_stream_api_key
VITE_BACKEND_URL=http://localhost:5001/api
```

### 4. Run the App Locally

```
# Start Backend
cd backend
npm run dev
Start Frontend
cd ../frontend
npm run dev
Visit: http://localhost:5173
```

# 👨‍💻 Author

Made with ❤️ by **_Affan Khan_**
