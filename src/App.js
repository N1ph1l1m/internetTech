import React from "react";
import "./App.css";
import styled from "styled-components";
import TaskManager from "./layout/components/taskManager/taskManager";
//import LoginForm from "../src/layout/components/loginForm/loginform";
//import Navigator from "./layout/components/navigator/navigator";


const WrapApp = styled.div`
  max-width:1920px;
  height:100%;
  ${'' /* margin: 20px auto; */}
  ${'' /* display: flex;
  justify-content: space-between;
  align-items:center; */}
  ${'' /* border: 3px black solid; */}
`;

function App() {
  return (
    <div className="App">
      <WrapApp>
        {/* <LoginForm/> */}
      {/* <Navigator/> */}
      <TaskManager/>
      </WrapApp>
    </div>
  );
}

export default App;
