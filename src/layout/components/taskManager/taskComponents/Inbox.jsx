import React, { useState } from "react";
import TaskContent from "../taskContent/taskContent";

function Inbox() {
  const [parentTasks, setParentTasks] = useState([
    {
      id: 1,
      text: "New email from client",
    },
    {
      id: 2,
      text: "Review meeting notes",
    },
    {
      id: 3,
      text: "Feedback on design proposal",
    },
    {
      id: 4,
      text: "Team collaboration tools discussion",
    },
    {
      id: 5,
      text: "Check-in with project manager",
    },
  ]);

  const handleTaskAdd = (task) => {
    setParentTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <TaskContent title="Work" tasks={parentTasks} onTaskAdd={handleTaskAdd} />
  );
}

export default Inbox;
