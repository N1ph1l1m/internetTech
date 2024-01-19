import React, { useState } from "react";
import styled from "styled-components";

import "../navigator.css";
import { FaArrowDown, FaArrowRight, FaPlus } from "react-icons/fa";

const DropDownWrap = styled.div`
width: 192px;
min-height:30px;
`

const DropDownItem = styled.div`
  width: 192px;
  height: 30px;
  margin-left: 4px;

  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #f8f8f8;
    i {
      color: gray;
    }
  }
  i {
    color: transparent;
  }
`;



function DropDown(props) {
  const [show, setShow] = useState(false);

  function switchDropDown() {
    setShow(!show);
    console.log(show);
  }

  function showDrop() {
    if (show) {
      return (
        <>
          {props.components}
        </>
      );
    }
  }
  const content = showDrop();
  return (
    <DropDownWrap>
      <DropDownItem>
        <div className="leftSide">
          <i onClick={switchDropDown}>
            {show ? <FaArrowDown size="10" /> : <FaArrowRight size="10" />}
          </i>
          <span>{props.text}</span>
        </div>
        <i>
          <FaPlus size="10" />
        </i>
       
      </DropDownItem>
      {content}
    </DropDownWrap>
  );
}
export default DropDown;
