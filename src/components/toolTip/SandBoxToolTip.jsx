/* eslint-disable */
import React, { Fragment } from 'react';
import Tooltip from './toolTip';
import Button from '../button/button';

import styled from "styled-components";

const InlineWrap = styled.div`
  margin: 0px auto;
  width:700px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const Sandbox = () => (
  <Fragment>
    <h2><span>1. Simple Right tooltip with big description:</span></h2>
    <InlineWrap>
      <Tooltip
        position="right"
        content="Simple small text"
        style={{ width: '120px' }}
      >
     Lorem Ipsum is simply dummy text of the
    </Tooltip>
    </InlineWrap>
  

    <h2><span>2. Left tooltip with outer styles:</span></h2>
    <InlineWrap>
      <Tooltip
        position="left"
        content="Simple small text"
        style={{ width: '120px' }}
      >
          Lorem Ipsum is simply dummy text of the
      </Tooltip>
    </InlineWrap>
  

    <h2><span>3. Bottom tooltip of custom component:</span></h2>
    <InlineWrap>
      <Tooltip
        position="bottom"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
      >
        <Button>Exit</Button>
      </Tooltip>
    </InlineWrap>
   

    <h2><span>4. Top tooltip of text element:</span></h2>
    <InlineWrap>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <Tooltip
      position="top"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
    >
      <span style={{ textDecoration: 'underline', padding: '0 4px' }}>Lorem</span>
    </Tooltip>
    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </InlineWrap>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
