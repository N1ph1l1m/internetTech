import React  , {useState}from 'react';
import TaskContent from '../taskContent/taskContent';
import HeaderTask from '../taskContent/headerTask/headerTask';

function  TaskToday() {
    const [parentTasks, setParentTasks] = useState([
        { id: 1, text: "Create design" },
        { id: 2, text: "Schedule meeting with team",checked:false },
        { id: 3, text: "Prepare presentation slides",checked:true },
        { id: 4, text: "Review project milestones",checked:false },
        { id: 5, text: "Submit project documentation" , checked:true},
    ]);

    const handleTaskAdd = (task) => {
        setParentTasks((prevTasks) => [...prevTasks, task]);
      };

    return (
        <>
        <HeaderTask title="Today"/>
        <TaskContent tasks={parentTasks} onTaskAdd={handleTaskAdd}/>
        </>

    );
};

export default TaskToday;