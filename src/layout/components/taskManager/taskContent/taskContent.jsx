import React from "react";
import styled from "styled-components";
import { BiSort } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { CgMoveTask } from "react-icons/cg";
import Icon from "../../../../components/icon/icon";

const TaskContentWrap = styled.div`
width:570px;
height:100vh;
border:1px solid red;
padding:10px;
`
const TitleTask = styled.span`
    font-size:21px;
    color:black;
    margin-top:3px;
    
`
const HeaderTask = styled.div`
max-width:545px;
height:64px;
padding:15px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`

const HeaderTaskTitle = styled.div`
    display:flex;
    align-items:center;
   
`
const HeaderTaskIcons = styled.div`

`



function TaskContent(){
    
return(
    <TaskContentWrap>
    <HeaderTask>
    <HeaderTaskTitle>
    <Icon className="taskContent">
        <CgMoveTask  size="30"/>
    </Icon>
    <TitleTask>Task 1 </TitleTask>
    </HeaderTaskTitle>
    <HeaderTaskIcons>
    <Icon className="taskContent">
        <BiSort size="20"/>
    </Icon>
    <Icon className="taskContent">
        <IoIosMore size="20"/>
    </Icon>
    
    </HeaderTaskIcons>
   

    </HeaderTask>
  
    </TaskContentWrap>
)

}export default TaskContent;
