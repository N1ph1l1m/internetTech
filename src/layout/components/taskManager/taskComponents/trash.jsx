import React from 'react';

import styled from "styled-components";
import Icon from '../../../../components/icon/icon';
import { FaTrashAlt } from "react-icons/fa";

import { IoIosMore } from "react-icons/io";
import { BiSort } from "react-icons/bi";
import { CgMoveTask } from "react-icons/cg";

const WrapTrash= styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-top:90px;
    flex-direction:column;
`
const TaskContentWrap = styled.div`
  width: 95%;
  height: 100vh;
  padding: 15px 20px;
`;
const TrashInfoTitle = styled.span`
margin-top:9px;
font-size:18px;
color:gray;
text-align:center;
font-weight:600;
`
const TrashInfoState = styled.span`
margin-top:9px;
font-size:16px;
color:gray;
text-align:center;
font-weight:300;
`

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

function Trash(props){
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
      <WrapTrash>
        <Icon>
            <FaTrashAlt size="120"/>
        </Icon>
        <TrashInfoTitle>
        You can find deleted tasks here.
        </TrashInfoTitle>
        <TrashInfoState>
       No deleted task yet.
        </TrashInfoState>
      </WrapTrash>
      </TaskContentWrap>
    );
   
    
};

export default Trash;