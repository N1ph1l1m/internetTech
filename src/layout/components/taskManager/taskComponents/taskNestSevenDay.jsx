import React , {useState}from 'react';
import TaskContent from '../taskContent/taskContent';

function TaskNestSevenDay(){
    const [parentTasks, setParentTasks] = useState([
        { id: 1, text: "Create design" },
        { id: 2, text: "Schedule meeting with team" },
        { id: 3, text: "Prepare presentation slides" },
        { id: 4, text: "Review project milestones" },
        { id: 5, text: "Submit project documentation" },
    ]);

    const handleTaskAdd = (task) => {
        setParentTasks((prevTasks) => [...prevTasks, task]);
      };

    return (
        <TaskContent title="Next 7 day" tasks={parentTasks} onTaskAdd={handleTaskAdd} />
    );
};

export default TaskNestSevenDay;