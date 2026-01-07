import React, { useState } from "react";
import { Trash2, Edit2 } from "lucide-react";
import EditTaskModal from "./EditTaskModal";
import { deleteTask, updateTask } from "../services/api";

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const statusClasses = {
    pending: "bg-yellow-100 text-yellow-700",
    "in-progress": "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(task.id); 
    } catch (error) {
      console.error(error);
      alert("Failed to delete task");
    }
  };

  const handleUpdate = async (updatedFields) => {
    try {
      const updatedTask = await updateTask(task.id, updatedFields); 
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? updatedTask : t))
      );

      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update task");
    }
  };

  return (
    <>
      <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>
          <p className="text-xs text-gray-400 mt-1">
            Created: {new Date(task.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              statusClasses[task.status]
            }`}
          >
            {task.status.replace("-", " ")}
          </span>

          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            <Edit2 size={16} />
          </button>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <EditTaskModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        task={task}
        onSave={handleUpdate}
      />
    </>
  );
};

export default TaskItem;
