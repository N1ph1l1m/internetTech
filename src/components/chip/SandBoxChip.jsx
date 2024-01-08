/* eslint-disable */
import React, { Fragment } from "react";
import Chip from "./chip";
import Example from "./Example";

import styled from "styled-components";

const InlineWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const SandBoxСhip = () => (
  <>
    <h2>
      <span>1. Chip with text:</span>
    </h2>
    <InlineWrap>
      <Chip text="User name" />
    </InlineWrap>

    <h2>
      <span>2. Chip with long text:</span>
    </h2>
    <InlineWrap>
      <Chip text="Very long chip text should be cropped" />
    </InlineWrap>

    <h2>
      <span>3. Chips with icon and close button:</span>
    </h2>
    <InlineWrap>
      <Chip text="Chip" widhIcon name="award" />
      <Chip text="Chip" withClose />
    </InlineWrap>

    <h2>
      <span>4. Full Chip:</span>
    </h2>
    <InlineWrap>
      <Chip text="Full Chip" withIcon withClose />
    </InlineWrap>

    <h2>
      <span>5. Chip with image:</span>
    </h2>
    <InlineWrap>
      <Chip
        text="React"
        withImage
        imageSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
        imgAlt="react"
      />
    </InlineWrap>

    <h2>
      <span>6. Chip with actions on Body and cross-icon:</span>
    </h2>
    <InlineWrap>
      <Chip
        text="React"
        withImage
        imageSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
        imgAlt="react"
        onChipClick={() => {
          console.log("clicked on a chip body");
        }}
      />
      <Chip
        text="Angular"
        withImage
        imageSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
        imgAlt="angular"
        onCloseClick={() => {
          console.log("clicked on a close icon");
        }}
        withClose
      />
      <Chip
        text="Vue"
        withImage
        imageSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
        imgAlt="vue"
        onCloseClick={() => {
          console.log("clicked on a close icon");
        }}
        onChipClick={() => {
          console.log("clicked on a chip body");
        }}
        withClose
      />
    </InlineWrap>

    <h2>
      <span>7. Example of using:</span>
    </h2>
    <InlineWrap>
      <Example />
    </InlineWrap>
  </>
);

export default SandBoxСhip;
/* eslint-enable */
