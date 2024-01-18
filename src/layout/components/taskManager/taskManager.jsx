import React from "react";

import TaskNav from "./taskNav/Tasknav";


// import './navigator.css'
import styled from "styled-components";

const TaskWrap = styled.div`
width:800px;
border:2px solid blue;
${'' /* margin-left:5px; */}


`

function TaskManager(){


    return(
    <TaskWrap>
        <TaskNav/>
      
    </TaskWrap>
    )
}

export default TaskManager;