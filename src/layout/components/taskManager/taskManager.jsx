import React from "react";

import TaskNav from "./taskNav/Tasknav";


// import './navigator.css'
import styled from "styled-components";

const TaskWrap = styled.div`
  width: 100vw; /* Занимает 100% ширины видового окна экрана */
  height: 100vh; /* Занимает 100% высоты видового окна экрана */
${'' /* border:2px solid blue; */}
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