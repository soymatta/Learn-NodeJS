import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import Task from "../components/Task.jsx";
import { getTasks } from "../api/tasks.api";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar name="Tasks" />
      <div className="tasks-container flex flex-wrap">
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            tag={task.tag}
            completed={task.completed}
          />
        ))}
      </div>
    </>
  );
}

export default TasksPage;
