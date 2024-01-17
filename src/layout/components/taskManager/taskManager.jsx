import React from "react";

import Navigator from "./navigator/navigator";


// import './navigator.css'
import styled from "styled-components";

const TaskWrap = styled.div`
width:2000px;
border:1px solid red;
left:0px;
top:0px;

`

function TaskManager(){


    return(
    <TaskWrap>
        <Navigator/>
        {/* <ContentWrap>
        <SearchPanel/>
        <ContentItem/>
        </ContentWrap> */}
    </TaskWrap>
    )
}

export default TaskManager;