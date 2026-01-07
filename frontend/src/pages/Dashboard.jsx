import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import socket from "../services/socket";
import { useState, useEffect } from "react";
import { fetchTasks } from "../services/api";

const Dashboard = () => {
  const [activeStatus, setActiveStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);


  useEffect(() => {
    
    socket.on("taskAdded", (newTask) => {
      setTasks((prev) => {
        if (prev.some((t) => t.id === newTask.id)) return prev; 
        return [newTask, ...prev];
      });
    });

    
    socket.on("taskUpdated", (updatedTask) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    });

    
    socket.on("taskDeleted", (deletedId) => {
      setTasks((prev) => prev.filter((t) => t.id !== deletedId));
    });

    return () => {
      socket.off("taskAdded");
      socket.off("taskUpdated");
      socket.off("taskDeleted");
    };
  }, []);

  
  const handleAddTask = () => {
    setShowForm(false); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}/>
      <div className="flex">
        <Sidebar
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          tasks={tasks}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex-1 p-6 space-y-6">
          <TaskList tasks={tasks} activeStatus={activeStatus} setTasks={setTasks} />

          {!showForm && (
            <div
              onClick={() => setShowForm(true)}
              className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center text-blue-600 font-semibold text-lg transition"
            >
              + Add New Task
            </div>
          )}

          {showForm && (
            <TaskForm
              onSubmit={handleAddTask}
              setTasks={setTasks}
              onClose={() => setShowForm(false)}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
