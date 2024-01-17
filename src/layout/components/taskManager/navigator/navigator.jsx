import React from "react";

import NavigatorItem from "./navigatorItem/navigatorItem";
import './navigator.css'
import styled from "styled-components";


const NavigatorWrap = styled.div`
height:100%;
width:50px;
border:1px solid black;
${'' /* margin-left:100px; */}
background-color:rgb(233, 232, 232);
`
function Navigator(){


    return(
    <NavigatorWrap>
        <NavigatorItem/>
    </NavigatorWrap>
    )
}

export default Navigator;