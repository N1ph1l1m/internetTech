import React from "react";
import Button from "../../../../../components/button/button";
import "../navigator.css";
import styled from "styled-components";

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
        <i class="fa-solid fa-calendar-day"></i>
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
