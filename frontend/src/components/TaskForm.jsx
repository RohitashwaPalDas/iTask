import React, { useState } from "react";
import { X } from "lucide-react";
import { createTask } from "../services/api";

const TaskForm = ({ onClose, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);

    try {
      const newTask = await createTask({
        title,
        description,
        status,
      });

      setTitle("");
      setDescription("");
      setStatus("pending");

      onClose();
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-lg shadow-md space-y-3 relative"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <X size={18} />
      </button>

      <h2 className="text-lg font-semibold">Create New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded focus:outline-blue-500"
        required
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded focus:outline-blue-500"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border p-2 rounded focus:outline-blue-500"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
