import React from "react";
import Button from "../../../../../components/button/button";
import Icon from "../../../../../components/icon/icon"
import "../navigator.css";
import styled from "styled-components";

import { RiTaskFill } from "react-icons/ri";

const TaskItemWrap = styled.div`
  height: 980px;
  position: relative;
  display:flex;
  justify-content:start;
  flex-direction:column;
  padding-top:10px;

`;


function TaskNavItem() {
  return (
    <TaskItemWrap>

        <Button className="taskNav">
        {/* <i class="fa-solid fa-calendar-day"></i> */}
        <Icon>   <RiTaskFill size="20"/></Icon>
     
         Today
        </Button>
      
    
       

        <Button className="taskNav">
        <i class="fa-solid fa-calendar-week"></i>
            Next 7 Days
        </Button>

        <Button className="taskNav">
        <i class="fa-solid fa-calendar-week"></i>
            Inbox
        </Button>

       

    </TaskItemWrap>
  );
}

export default TaskNavItem;
