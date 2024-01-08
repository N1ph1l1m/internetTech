/* eslint-disable */
import React, { Fragment } from 'react';
import ListGroup from './listGroup';
import ListGroupItem from './listGroupItem';
import Badge from '../badge/badge';
import Button from '../button/button';

import styled from "styled-components";

const InlineWrap = styled.div`
  margin: 0px auto;
  width:700px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;


const SandboxListGroup = () => (
  <Fragment>

    <h2><span>1. Base Group list:</span></h2>
    <InlineWrap>
      <ListGroup>
        <ListGroupItem>List item 1</ListGroupItem>
        <ListGroupItem>List item 2</ListGroupItem>
        <ListGroupItem>List item 3</ListGroupItem>
        <ListGroupItem>List item 4</ListGroupItem>
      </ListGroup>
    </InlineWrap>


    <h2><span>2. Group list with active and disabled elements:</span></h2>
    <InlineWrap>
      <ListGroup>
        <ListGroupItem active>List item 1</ListGroupItem>
        <ListGroupItem>List item 2</ListGroupItem>
        <ListGroupItem disabled>List item 3</ListGroupItem>
        <ListGroupItem>List item 4</ListGroupItem>
      </ListGroup>
    </InlineWrap>


    <h2><span>3. Group list with custom components:</span></h2>
    <InlineWrap>
      <ListGroup>
        <ListGroupItem>
          List item 1
          <Badge value={2} inline />
        </ListGroupItem>
        <ListGroupItem>
          List item 2
          <Badge value="new" inline />
        </ListGroupItem>
        <ListGroupItem>
          List item 3
          <Badge value={10} warning inline />
        </ListGroupItem>
        <ListGroupItem>
          List item 4
          <Button>Update</Button>
        </ListGroupItem>
      </ListGroup>
    </InlineWrap>
    

    <h2><span>4. Group list links:</span></h2>
    <InlineWrap>
      <ListGroup>
        <ListGroupItem href="/" active>List item 1</ListGroupItem>
        <ListGroupItem href="/">List item 2</ListGroupItem>
        <ListGroupItem href="/">List item 3</ListGroupItem>
        <ListGroupItem href="/">List item 4</ListGroupItem>
      </ListGroup>
    </InlineWrap>
   

  </Fragment>
);

export default SandboxListGroup;
/* eslint-enable */
