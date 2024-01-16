import React from "react";

import Navigator from "./navigator/navigator";
import SearchPanel from "./searchPanel/searchPanel";
// import './navigator.css'
import styled from "styled-components";

const TaskWrap = styled.div`
width:1500px;
height:800px;
border:1px solid red;
border-radius:10px;
display:flex;
background-color: rgba(240, 248, 255, 1); 
justify-content: space-around;
margin:0px auto;
`
const ContentWrap = styled.div`
    width:1000px;
    height:750px;
    ${'' /* border:1px solid red; */}
    margin-top:30px;
    
`

const ContentItem = styled.div`
    width:980px;
    height:667px;
    border:1px solid #0af;
    margin-top:30px;
    margin-left:10px;
    border-radius:10px;

`
function TaskManager(){


    return(
    <TaskWrap>
        <Navigator/>
        <ContentWrap>
        <SearchPanel/>
        <ContentItem/>
        </ContentWrap>
    </TaskWrap>
    )
}

export default TaskManager;