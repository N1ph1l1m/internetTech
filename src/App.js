import React from "react";
import "./App.css";
import styled from "styled-components";
import LoginForm from "./components/loginForm/loginform";


const WrapApp = styled.div`
  height:800px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items:center;
  ${'' /* border: 3px black solid; */}
`;

function App() {
  return (
    <div className="App">
      <WrapApp>
        {/* <LeftBlock></LeftBlock>
        <RightBlock/> */}
        <LoginForm/>
      </WrapApp>
    </div>
  );
}

export default App;
