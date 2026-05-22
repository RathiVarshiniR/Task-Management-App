TaskFlow — Advanced MERN Task Management Application

A modern full-stack task management web application built using the MERN stack with secure authentication, dynamic task handling, responsive UI, and production-style architecture.

🚀 Features
🔐 Authentication & Authorization
User Registration
User Login
JWT Authentication
Protected Routes
Secure Password Hashing using bcrypt
📋 Task Management
Create Tasks
Read Tasks
Update Tasks
Delete Tasks
Mark Tasks as Completed
Task Status Indicators
Dynamic Task Rendering
🎨 Modern UI/UX
Responsive Design
Glassmorphism UI
Animated Components
Dark Themed Dashboard
Mobile Friendly Layout
Smooth Hover Effects
Framer Motion Animations
⚡ Advanced Features
REST API Integration
Axios API Client
Reusable React Components
Real-Time Ready Architecture
Scalable Folder Structure
MongoDB Cloud Database
🛠️ Tech Stack
Frontend
React.js
Vite
Tailwind CSS
React Router DOM
Axios
Framer Motion
React Icons
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
dotenv
cors
📂 Project Structure
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
⚙️ Installation
Clone Repository
git clone YOUR_GITHUB_REPOSITORY_URL
📦 Backend Setup
Navigate to Backend
cd backend
Install Dependencies
npm install
Create Environment Variables

Create .env

PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
Run Backend Server
npm run dev

Backend runs on:

http://localhost:5000
💻 Frontend Setup
Navigate to Frontend
cd frontend
Install Dependencies
npm install
Run Frontend
npm run dev

Frontend runs on:

http://localhost:5173
🌐 API Endpoints
Authentication Routes
Register User
POST /api/auth/register
Login User
POST /api/auth/login
Task Routes
Get All Tasks
GET /api/tasks
Create Task
POST /api/tasks
Update Task
PUT /api/tasks/:id
Delete Task
DELETE /api/tasks/:id
🔑 Authentication Flow
User registers account
Password gets encrypted using bcrypt
JWT token generated during login
Token stored in localStorage
Protected API requests include token in headers
Backend middleware verifies token access
🎨 UI Design Highlights
Modern SaaS Dashboard
Animated Login/Register Screens
Responsive Grid Layout
Interactive Task Cards
Professional Typography
Dark Theme Dashboard
Smooth Motion Effects
📱 Responsive Design

The application is fully responsive across:

Desktop
Tablet
Mobile Devices

Built using:

Tailwind CSS Grid
Flexbox
Responsive Breakpoints
☁️ Deployment
Frontend Deployment
Vercel
Netlify
Backend Deployment
Render
Railway
Database
MongoDB Atlas
🔒 Security Features
Password Hashing
JWT Authentication
Protected Backend Routes
Secure API Access
Environment Variables
📈 Future Enhancements
Drag & Drop Tasks
Kanban Board
Real-Time Updates with Socket.io
Task Priorities
Team Collaboration
Calendar View
Notifications
AI-Based Task Suggestions
Redux Toolkit Integration
TypeScript Migration
🧠 Learning Outcomes

This project demonstrates knowledge of:

Full-Stack MERN Development
REST APIs
Authentication Systems
MongoDB Integration
React Component Architecture
State Management
Responsive UI Design
Backend Middleware
API Handling
Modern Frontend Development
📸 Screenshots

Add screenshots here after deployment.

Example:

![Login Page](./screenshots/login.png)

![Dashboard](./screenshots/dashboard.png)
🤝 Contributing

Contributions are welcome.

Fork the repository and create a pull request.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Rathi Varshini R

GitHub: RathiVarshiniR GitHub
LinkedIn: Rathi Varshini R LinkedIn
⭐ If You Like This Project

Give this repository a star on GitHub.
