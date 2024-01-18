import React from "react";
import { Outlet, Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../button/button";

import "../../../src/index.css";
const OutletWRap = styled.div`
`;
const MainWrap = styled.div`
  width: 1900px;
  border: 3px solid red;
  display: flex;
`;

const NavigatorItemWrap = styled.div`
  width:60px;
  height: 1000px;
  position: relative;
  border: 3px solid black;
  background-color: rgb(233, 232, 232);
  padding:5px;
`;

function Root() {
  return (
    <MainWrap>
      <NavigatorItemWrap>
        <Button className="newColor">
          <Link className="colorLink" to={"/task"}>
            <i class="fa-regular fa-square-check"></i>
          </Link>
        </Button>

        <Button className="newColor">
          <Link className="colorLink" to={"/"}>
            <i class="fa-solid fa-calendar-days"></i>
          </Link>
        </Button>
        <Button className="newColor">
          <Link className="colorLink" to={"/"}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </Button>

        <Button className="newColor">
          <Link className="colorLink" to={"/"}>
            <i class="fa-solid fa-rotate"></i>
          </Link>
        </Button>

        <Button className="newColor">
          <Link className="colorLink" to={"/"}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
        </Button>
      </NavigatorItemWrap>
      <OutletWRap>
        <Outlet />
      </OutletWRap>
    </MainWrap>
  );
}
export default Root;
