import React , {useState} from 'react';
import TaskContent from '../../taskContent/taskContent';

function Mytasks(){
    const [parentTasks, setParentTasks] = useState([
        {
            id: 1,
            text: "Finish coding feature A",
          },
          {
            id: 2,
            text: "Prepare for client demo",
          },
          {
            id: 3,
            text: "Review and respond to emails",
          },
          {
            id: 4,
            text: "Create project timeline",
          },
          {
            id: 5,
            text: "Attend team brainstorming session",
          },
    ]);

    const handleTaskAdd = (task) => {
        setParentTasks((prevTasks) => [...prevTasks, task]);
      };

    return (
        <TaskContent title="My tasks" tasks={parentTasks} onTaskAdd={handleTaskAdd} />
    );
};


export default Mytasks;