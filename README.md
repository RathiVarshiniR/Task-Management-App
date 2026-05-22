# TaskFlow — Advanced MERN Task Management Application

A modern full-stack task management web application built using the MERN stack with secure authentication, dynamic task handling, responsive UI, and production-style architecture.

---

# 🚀 Features

## 🔐 Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

---

## 📋 Task Management
- Create Tasks
- Read Tasks
- Update Tasks
- Delete Tasks
- Mark Tasks as Completed
- Task Status Indicators
- Dynamic Task Rendering

---

## 🎨 Modern UI/UX
- Responsive Design
- Glassmorphism UI
- Animated Components
- Dark Themed Dashboard
- Mobile Friendly Layout
- Smooth Hover Effects
- Framer Motion Animations

---

## ⚡ Advanced Features
- REST API Integration
- Axios API Client
- Reusable React Components
- Real-Time Ready Architecture
- Scalable Folder Structure
- MongoDB Cloud Database

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- React Icons

---

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

# 📂 Project Structure

```bash
task-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskForm.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

---

# 📦 Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create `.env`

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

## Run Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 💻 Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🌐 API Endpoints

## Authentication Routes

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Task Routes

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

---

# 🔑 Authentication Flow

1. User registers account
2. Password gets encrypted using bcrypt
3. JWT token generated during login
4. Token stored in localStorage
5. Protected API requests include token in headers
6. Backend middleware verifies token access

---

# 🎨 UI Design Highlights

- Modern SaaS Dashboard
- Animated Login/Register Screens
- Responsive Grid Layout
- Interactive Task Cards
- Professional Typography
- Dark Theme Dashboard
- Smooth Motion Effects

---

# 📱 Responsive Design

The application is fully responsive across:
- Desktop
- Tablet
- Mobile Devices

Built using:
- Tailwind CSS Grid
- Flexbox
- Responsive Breakpoints

---

# ☁️ Deployment

## Frontend Deployment
- Vercel
- Netlify

## Backend Deployment
- Render
- Railway

## Database
- MongoDB Atlas

---

# 🔒 Security Features

- Password Hashing
- JWT Authentication
- Protected Backend Routes
- Secure API Access
- Environment Variables

---

# 📈 Future Enhancements

- Drag & Drop Tasks
- Kanban Board
- Real-Time Updates with Socket.io
- Task Priorities
- Team Collaboration
- Calendar View
- Notifications
- AI-Based Task Suggestions
- Redux Toolkit Integration
- TypeScript Migration

---

# 🧠 Learning Outcomes

This project demonstrates knowledge of:

- Full-Stack MERN Development
- REST APIs
- Authentication Systems
- MongoDB Integration
- React Component Architecture
- State Management
- Responsive UI Design
- Backend Middleware
- API Handling
- Modern Frontend Development

---

# 🤝 Contributing

Contributions are welcome.

Fork the repository and create a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Rathi Varshini R

- GitHub: https://github.com/RathiVarshiniR
- LinkedIn: https://www.linkedin.com/in/rathi-varshini-r-06858b367

---

# ⭐ If You Like This Project

Give this repository a star on GitHub.
