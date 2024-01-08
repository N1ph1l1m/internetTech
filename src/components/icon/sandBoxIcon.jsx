import React from "react";
import Icon from "./icon";
import Button from "../button/button";
import ButtonGroup from "../groupButton/groupButton";
import {
  AiFillApple,
  AiFillAppstore,
  AiFillAlipayCircle,
} from "react-icons/ai";
import "./icon.css";
import styled from "styled-components";

const SandBoxIconWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

const SandBoxIcon = () => (
  <SandBoxIconWrap>
    <h2>
      <span>Use icons with react library</span>
    </h2>
    <Button className="buttonSize" active>
      <AiFillAlipayCircle size={44} />
      Simple Button
    </Button>

    <h2>
      <span>Icon button group:</span>
    </h2>

    <ButtonGroup className="buttonGroupSize" vertical>
      <Button className="buttonSize" active>
        <AiFillApple size={44} />
        Apple Button
      </Button>

      <Button className="buttonSize">
        <AiFillAppstore size={44} />
        Windows Button
      </Button>
    </ButtonGroup>
    <h2>
      <span>Disabling icon functionality:</span>
      <br />
      <Button className="buttonSize" disabled>
        <AiFillAppstore size={44} />
        Windows Button
      </Button>
    </h2>
    <hr/>
    <h2>
      <span>Use icons with library  Fontawesome </span>
    </h2>
    <Icon
      size={2}
      onClick={() => {
        console.log("!!!");
      }}
      name="atom"
    />

    <h2>
      <span>Icons button group:</span>
    </h2>
    <ButtonGroup className="buttonGroupSize">
      <Button active>
        <Icon name="align-right" />
      </Button>
      <Button>
        <Icon name="align-center" />
      </Button>
      <Button>
        <Icon name="align-left" />
      </Button>
      <Button>
        <Icon name="align-justify" />
      </Button>
    </ButtonGroup>

    <h2>
      <span>1. Base icon:</span>
    </h2>
    <Icon
      className="iconPosition"
      size={50}
      onClick={() => {
        console.log("!!!");
      }}
      name="atom"
    />

    <h2>
      <span>Icon with size 8rem</span>
    </h2>
    <Icon className="iconPosition" title="badge" size={80} name="award" />

    <h2>
      <span>Disabling icon functionality:</span>
    </h2>
    <Icon
      className="iconPosition"
      size={45}
      disabled
      onClick={() => {
        console.log("!!!");
      }}
      name="atom"
    />
  </SandBoxIconWrap>
);
export default SandBoxIcon;
