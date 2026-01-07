# Task Management App

A **full-stack Task Management Application** built with the **PERN stack (PostgreSQL, Express, React, Node.js)**. It supports **real-time task updates** using **WebSockets**, allows users to **create, update, and filter tasks** by status, and provides a clean, responsive dashboard for managing tasks efficiently.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This Task Management App enables users to organize their daily work efficiently. Tasks can be **added, edited, and deleted**, with updates instantly reflected across all connected clients using WebSockets. The app includes:

- Sidebar with **task counts and status filters**  
- Task form to **add or edit tasks**  
- Task list with **status-based filtering**  
- Responsive and user-friendly interface  

---

## Features

- **Real-time task updates** using WebSockets  
- **Task creation and editing** with form validation  
- **Filter tasks** by status: All, Pending, Completed, In Progress  
- **Sidebar dashboard** displaying counts of tasks by status  
- **Responsive design** for desktop and mobile  
- **Backend REST API** to manage tasks  
- **Persistent storage** using PostgreSQL  

---

## Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Axios (API requests)  
- Socket.io-client  

**Backend:**  
- Node.js  
- Express.js  
- Socket.io  
- PostgreSQL  
- Sequelize (ORM)  

**Other Tools:**  
- Nodemon (development server restart)  
- Postman (API testing)  

---

## Folder Structure

```
task-manager/
│
├─ backend/
│   ├─ src/          
│   │   ├─ routes/          # Express routes
│   │   ├─ controllers/     # Route controllers
│   │   ├─ config/db.js     # PostgreSQL connection
│   │   ├─ app.js           # Express app connection   
│   │   ├─ server.js        # Main backend entry
│   ├─ package.json
│
├─ frontend/
│   ├─ src/
│   │   ├─ components/  # React components (Header, Sidebar, TaskForm, TaskList)
│   │   ├─ services/    # API and WebSocket services
│   │   ├─ App.js
│   │   ├─ index.js
│
├─ .gitignore
└─ README.md
```

---

## Installation

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=taskmanager
   DB_PORT=5432
   ```
4. Run database migrations (if any) and start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

---

## Running the Project

- Backend will run at `http://localhost:5000`  
- Frontend will run at `http://localhost:3000`  
- Tasks added in the frontend will update in **real-time across all clients**.  

---

## Usage

1. Open the app in the browser.
2. Add a new task using the **Task Form**.
3. Filter tasks using the **Sidebar**.
4. Edit or mark tasks as completed directly from the task list.
5. Observe **real-time updates** when multiple clients are connected.  

---

## Future Improvements

- Add **user authentication** (signup/login)  
- Support **priority and due dates** for tasks  
- Add **drag-and-drop functionality** to reorder tasks  
- Mobile app version using **React Native**  
- Enhanced **analytics dashboard** for task insights  

---

## Contributing

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Create a Pull Request  

---

## License

This project is licensed under the **MIT License**.
