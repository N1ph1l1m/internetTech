import React from "react";
import { Outlet, Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../button/button";
import Icon from "../icon/icon";

import { RiTaskFill , } from "react-icons/ri";
import { FaUser, FaCalendarAlt , FaSearch ,FaSyncAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import "../../../src/index.css";
const OutletWRap = styled.div`
  width: 100vw; 
  height: 100vh; 
  background-color:white;
`;
const MainWrap = styled.div`
  width: 100vw; 
  height: 100vh; 
  display: flex;
`;

const NavigatorItemWrap = styled.div`
  width: 60px;
  height: 100vh;
  border: 3px solid black;
  background-color: #e0dede;
  padding: 5px;
  display:flex;
  flex-direction:column;
  align-items: flex-start;

`;
const ChildNavItem = styled.div`
margin-top: auto;
`

function Root() {
  return (
    <MainWrap>
      <NavigatorItemWrap>

      <Button className="newColor">
          <Link className="colorLink" to={"taskmanager"}>
            <Icon> <FaUser size={20}/></Icon>
          </Link>
        </Button>


        <Button className="newColor">
          <Link className="colorLink" to={"taskmanager"}>
            <Icon> <RiTaskFill size={20}/></Icon>
          </Link>
        </Button>

        <Button className="newColor">
          <Link className="colorLink" to={"calendar"}>
            <Icon><FaCalendarAlt size={20}/></Icon>
          </Link>
        </Button>
        <Button className="newColor">
          <Link className="colorLink" to={""}>
          <Icon><FaSearch size={20}/></Icon>
          </Link>
        </Button>

      <ChildNavItem>
      <Button className="newColor ">
          <Link className="colorLink" to={""}>
          <Icon><FaSyncAlt  size={20}/></Icon>
          </Link>
        </Button>

        <Button className="newColor">
          <Link className="colorLink" to={"/"}>
          <Icon><ImExit size={20}/></Icon>
          </Link>
        </Button>
      </ChildNavItem>
      
    
    
      </NavigatorItemWrap>
      <OutletWRap>
        <Outlet />
      </OutletWRap>
    </MainWrap>
  );
}
export default Root;
