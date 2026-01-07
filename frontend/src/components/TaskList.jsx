import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ activeStatus, tasks, setTasks }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    let filtered = tasks;

    switch (activeStatus) {
      case "all":
        filtered = tasks;
        break;
      case "inProgress":
        filtered = tasks.filter((t) => t.status === "in-progress");
        break;
      case "pending":
      case "completed":
        filtered = tasks.filter((t) => t.status === activeStatus);
        break;
      default:
        filtered = tasks;
    }

    setFilteredTasks(filtered);
  }, [activeStatus, tasks]);

  return (
    <div className="p-5 space-y-3">
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  );
};

export default TaskList;
