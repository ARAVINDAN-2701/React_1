import logo from './logo.svg';
import './App.css';
import Test from './components/functionalComponents/testComponents';
import TestClassComp from './components/classComponents/testClassComponent';
import Propcomp from './components/functionalComponents/propsComponent';
import Statecomp from './components/classComponents/stateComponents';
import State2cmp from './components/classComponents/stateComponent1';

function App() {
  return (
    <div className="App">
      <State2cmp/>
      <TestClassComp/>
      <Test/>
      <header className="App-header">
        {/* calling the props - properties */}
        <Propcomp name="ARAV" course="MERN" />
        <Propcomp name="CIBI" course="MERN" />
        <Statecomp/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
