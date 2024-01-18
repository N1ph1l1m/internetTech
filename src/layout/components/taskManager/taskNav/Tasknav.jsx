import React from "react";

import NavigatorItem from "./taskNavItem/taskNavItem";
import './navigator.css'
import styled from "styled-components";


const NavigatorWrap = styled.div`
height:100%;
width:200px;
${'' /* border:1px solid black; */}
${'' /* margin-left:100px; */}
background-color:white;
border-right:1px solid gray;
`
function TaskNav(){


    return(
    <NavigatorWrap>
        <NavigatorItem/>
    </NavigatorWrap>
    )
}

export default TaskNav;