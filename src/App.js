import React from "react";
import "./App.css";
import styled from "styled-components";
import LoginForm from "./components/loginForm/loginform";

const WrapApp = styled.div`
  width: 1200px;
  border: 3px black solid;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;
const LeftBlock = styled.div`
  width: 700px;
  border: 3px solid blue;
  background-color: #726aba;
`;

// const RightBlock = styled.div`
//   width:500px;
//   height:500px;
//   border: 1px solid black;
//   background-color:#326aba;
// `
function App() {
  return (
    <div className="App">
      <WrapApp>
        <LeftBlock></LeftBlock>
        {/* <RightBlock/> */}
        <LoginForm/>
      </WrapApp>
    </div>
  );
}

export default App;
