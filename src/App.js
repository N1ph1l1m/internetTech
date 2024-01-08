import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Clear project</h1>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
