import React from "react";

import styled from "styled-components";
import ListGroup from "../../../../../components/listGroup/listGroup";
import ListGroupItem from "../../../../../components/listGroup/listGroupItem";

import "../navigator.css"
// const NavigatorItemWrap = styled.div`
// width:318px;
// height:750px;
// border:1px solid black;
// margin-left:100px;
// margin-top:30px;
// `
function NavigatorItem(){


    return(
    <>
        <ListGroup>
            <ListGroupItem className="newList">My Task </ListGroupItem>
            <ListGroupItem className="newList">Completed</ListGroupItem>
            <ListGroupItem className="newList">Important</ListGroupItem>
            <ListGroupItem className="newList">Calendar</ListGroupItem>
            <ListGroupItem className="newList">Time manager</ListGroupItem>
            <ListGroupItem className="newList">Settings</ListGroupItem>
        </ListGroup>
    </>
    )
}

export default NavigatorItem;