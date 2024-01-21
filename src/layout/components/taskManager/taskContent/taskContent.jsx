import React, { useState } from "react";
import styled from "styled-components";
import { BiSort } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { CgMoveTask } from "react-icons/cg";
import TaskContentText from "./taskContentText";
import Input from "../../../../components/input/input";
import Icon from "../../../../components/icon/icon";

const TaskContentWrap = styled.div`
  width: 60vw;
  height: 100vh;
  border: 1px solid red;
  padding: 15px 20px;
`;
const TitleTask = styled.span`
  font-size: 21px;
  color: black;
  margin-top: 3px;
`;
const HeaderTask = styled.div`
  min-width: 545px;
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTaskTitle = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderTaskIcons = styled.div``;
function TaskContent(props) {
  return (
    <TaskContentWrap>
      <HeaderTask>
        <HeaderTaskTitle>
          <Icon className="taskContent">
            <CgMoveTask size="30" />
          </Icon>
          <TitleTask>{props.title} </TitleTask>
        </HeaderTaskTitle>
        <HeaderTaskIcons>
          <Icon className="taskContent">
            <BiSort size="20" />
          </Icon>
          <Icon className="taskContent">
            <IoIosMore size="20" />
          </Icon>
        </HeaderTaskIcons>
      </HeaderTask>

      <Input
        className="inputTask"
        placeholder="+ Add tast to  'task' , press Enter to save. "
      />
      <TaskContentText text="Test" />
      <TaskContentText />
    </TaskContentWrap>
  );
}
export default TaskContent;
