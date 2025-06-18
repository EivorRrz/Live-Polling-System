# 🗳️ Live Polling System

Real-time polling system for educational environments. Teachers create polls, students answer, and both see live results with interactive charts.

## ✨ Features

### Teacher Dashboard
- Create polls with custom questions and options
- Set time limits for polls
- View live results with interactive charts
- Manage students (kick disruptive users)
- Real-time chat with students
- View poll history from database
- **Restriction**: Can only create polls when no active polls OR all students answered

### Student Dashboard
- Answer polls with clean interface
- See live results immediately after answering
- Real-time countdown timer
- Interactive bar charts with vote breakdowns
- Chat with teacher and classmates
- Name persistence across sessions
- 60-second timeout protection

### System Features
- Real-time updates via Socket.io
- MongoDB for persistent storage
- Responsive design for all devices
- Role-based permissions
- Live chat system

## 🚀 Quick Start

### Backend Setup
```bash
cd Server
npm install
# Create .env file with MONGO_URI=mongodb://localhost:27017/polling-system
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 💻 Tech Stack
- **Frontend**: React, Socket.io Client, Recharts, Styled Components, Framer Motion
- **Backend**: Node.js, Express, Socket.io, MongoDB, Mongoose
- **Database**: MongoDB

## 📁 Project Structure
```
Interview.io-Task/
├── frontend/           # React application
│   └── src/
│       ├── components/ # Dashboard components
│       └── context/    # Socket & User context
└── Server/            # Node.js backend
    ├── controller/    # API controllers
    ├── model/         # MongoDB schemas
    └── socket/        # Socket.io events
```

## 🎯 Requirements Status

✅ **Must Have**: Functional system, teacher polls, student answers, live results  
✅ **Good to Have**: Configurable time, kick students, proper design  
✅ **Brownie Points**: Chat system, poll history from database  
✅ **Advanced**: Teacher restrictions, student live results, 60s timeout  

## 🔌 Key Socket Events

### Teacher
- `createPoll` - Create new poll
- `end_poll` - End active poll
- `kick_student` - Remove student

### Student  
- `join` - Join system
- `answer_poll` - Submit poll answer

### Server Response
- `poll` - New poll broadcast
- `live_results` - Real-time results
- `new_message` - Chat messages

---
**Educational polling system with live results and chat functionality**
