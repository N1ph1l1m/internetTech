import React from "react";

import NavigatorItem from "./navigatorItem/navigatorItem";
import './navigator.css'
import styled from "styled-components";


const NavigatorWrap = styled.div`
width:318px;
height:750px;
border:1px solid #0af;
${'' /* margin-left:100px; */}
border-radius:10px;
margin-top:30px;
background-color: white; 
`
function Navigator(){


    return(
    <NavigatorWrap>
        <NavigatorItem/>
    </NavigatorWrap>
    )
}

export default Navigator;