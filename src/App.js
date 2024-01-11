import './App.css';
import Registration from './components/registration/registration';
import styled from "styled-components";

const WrapApp = styled.div`
  width:1200px;
  border:3px black solid;
  margin:50px auto;
  display:flex;
  justify-content:space-between;
`
const LeftBlock = styled.div`
  width:500px;
  border: 1solid ;
  background-color:#726aba;
`
function App() {
  return (
    <div className="App">
  <WrapApp>
  <LeftBlock/>
  <Registration/>
  </WrapApp>
    </div>
  );
}

export default App;
