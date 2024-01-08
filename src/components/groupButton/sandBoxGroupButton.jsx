/* eslint-disable */
import React, { Fragment, Component } from "react";
import ButtonGroup from "../groupButton/groupButton";
import Button from "../button/button";
import styled from "styled-components";

const InlineWrap = styled.div`
  margin: 0px auto;
  width: 500px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const WrapSandBox = styled.div`
  margin: 10px auto;
`;

class Sandbox extends Component {
  state = {
    switchOn: true,
  };

  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  };

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  };

  render() {
    const { switchOn } = this.state;

    return (
      <>
        <WrapSandBox>
          <h2>
            <span>1. Horizontal button group:</span>
          </h2>
          <InlineWrap>
            <ButtonGroup>
              <Button active>First</Button>
              <Button>Middle</Button>
              <Button>Last</Button>
            </ButtonGroup>
          </InlineWrap>

          <h2>
            <span>2. Vertical button group:</span>
          </h2>
          <InlineWrap>
            <ButtonGroup vertical>
              <Button className="newWidth">First</Button>
              <Button active>Middle</Button>
              <Button>Last</Button>
            </ButtonGroup>
          </InlineWrap>

          <h2>
            <span>3. Switcher button group:</span>
          </h2>
          <InlineWrap>
            <ButtonGroup>
              <Button onClick={this.handleSwitchOn} active={switchOn}>
                ON
              </Button>
              <Button onClick={this.handleSwitchOff} active={!switchOn}>
                OFF
              </Button>
            </ButtonGroup>
          </InlineWrap>
        </WrapSandBox>
      </>
    );
  }
}

export default Sandbox;
/* eslint-enable */
