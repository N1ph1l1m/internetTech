import React, {useState}from 'react';
import TaskContent from '../taskContent/taskContent';
import HeaderTask from '../taskContent/headerTask/headerTask';
import NonElement from '../taskContent/nonElement/nonElement';
import { GrCompliance } from "react-icons/gr";

function Completed(){
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
    function switchState(){
      if(!isNaN(parentTasks)){
        return(
         <NonElement
          icon ={<GrCompliance  size = "120"/>}
          title = "Here you can find completed tasks"
          text = "There are no completed tasks yet.." 
         />
        )
      }
      else{
        return(
          <>
          <TaskContent  tasks={parentTasks} onTaskAdd={handleTaskAdd}/>
          </>
        )
      }
    }
    const handleTaskAdd = (task) => {
        setParentTasks((prevTasks) => [...prevTasks, task]);

      };
      const showElements = switchState();
    return (
   <>
      <HeaderTask title="Completed"/>
        {showElements}
   </>
    );
};


export default Completed;