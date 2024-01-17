import React from "react";
import Button from "../../../../../components/button/button";
import "../navigator.css";
import styled from "styled-components";

const NavigatorItemWrap = styled.div`
  height: 980px;
  position: relative;
`;
const Head = styled.div`
  position: absolute;
  top: 0px;
`;
const Fot = styled.div`
  position: absolute;
  bottom: 0px;
`;
function NavigatorItem() {
  return (
    <NavigatorItemWrap>
      <Head>
        <Button className="newColor">
          <i class="fa-regular fa-square-check"></i>
        </Button>

        <Button className="newColor">
          <i class="fa-solid fa-calendar-days"></i>
        </Button>
        <Button className="newColor">
          <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </Head>
      <Fot>
        <Button className="newColor">
          <i class="fa-solid fa-magnifying-glass"></i>
        </Button>

        <Button className="newColor">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </Button>
      </Fot>
    </NavigatorItemWrap>
  );
}

export default NavigatorItem;
