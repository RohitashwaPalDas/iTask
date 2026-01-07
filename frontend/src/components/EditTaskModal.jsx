import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setStatus(task.status || "pending");
    }
  }, [task]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      title,
      description,
      status,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full border p-2 rounded mb-3 focus:outline-blue-500"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="w-full border p-2 rounded mb-3 focus:outline-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-2 rounded mb-4 focus:outline-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditTaskModal;
