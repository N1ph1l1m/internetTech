import React from "react";
import Button from "../../../../../components/button/button";
import Icon from "../../../../../components/icon/icon";
import "../navigator.css";
import "../../../../../index.css";
import DropDown from "./dromDown";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import {RiTaskLine } from "react-icons/ri";
import { BsCalendar2Day } from "react-icons/bs";
import { FaCalendarDay, FaTrash} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const MainWrap = styled.div`
  width: 100vw; 
  height: 100vh; 
  display: flex;
`;

const TaskItemWrap = styled.div`
  height: 980px;
  position: relative;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-top: 15px;
  
`;
const TaskHeader = styled.div`
  height: 120px;
  width: 220px;
  margin-bottom: 40px;
  ${'' /* display:flex;
  flex-direction:column; */}
  
`;
const BorderBotton = styled.div`
  margin: 5px auto;
  width: 190px;
  border: 1px solid #d1cfcf;
`;
const TaskList = styled.div`
  width: 220px;
  min-height: 70px;
`;
const DropDownContent = styled.div`
  width: 192px;
  min-height: 30px;
  margin-left: 4px;
  border: 1px solid green;
  margin-bottom: 5px;
`;

const OtherElement = styled.div`
  width: 220px;
  margin-bottom: 40px;
`;
const OutletWrap = styled.div`
width:1000px;
height:100vh;
border:3px solid green;
`

function TaskNavItem() {
  return (
   <MainWrap>
     <TaskItemWrap>
      <TaskHeader>
        <Button className="taskNav" >
        <Link className="textLink" to={"today"}>
        <Icon>
            <FaCalendarDay size="20"/>
          </Icon>
        </Link>
        <span className="textLink">Today</span>
        </Button>

        <Button className="taskNav">
          <Icon>
            <BsCalendar2Day size="20" />{" "}
          </Icon>
          Next 7 Days
        </Button>

        <Button className="taskNav">
          <Icon>
            <IoIosMail size="20" />{" "}
          </Icon>
          Inbox
        </Button>
        <BorderBotton />
      </TaskHeader>

      <TaskList>
        <DropDown
          text="List"
          components={
            <DropDownContent>
              <p>Text</p>
              <p>Text</p>
            </DropDownContent>
          }
        />

        <DropDown text="List" components={<DropDownContent />} />
        <BorderBotton />
      </TaskList>
          <OtherElement>
          <Button className="taskNav">
          <Icon>
            <RiTaskLine size="20" />
          </Icon>
          Completed
        </Button>
        <Button className="taskNav">
          <Icon>
            <FaTrash size="20" />
          </Icon>
          Trash
        </Button>

          </OtherElement>
       
  
    </TaskItemWrap>
    <OutletWrap>
      <Outlet/>
    </OutletWrap>
   </MainWrap>
  );
}

export default TaskNavItem;
