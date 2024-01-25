// import logo from './logo.svg';
import './App.css';
import Navbar from './components/functionalComponents/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/functionalComponents/About';
import Experence from './components/functionalComponents/Experience';
import Login from './components/functionalComponents/Login';
// import Test from './components/functionalComponents/testComponents';
// import TestClassComp from './components/classComponents/testClassComponent';
// import Propcomp from './components/functionalComponents/propsComponent';
// import Statecomp from './components/classComponents/stateComponents';
// import State2cmp from './components/classComponents/stateComponent1';

function App() {
  return (
    <div className="App">
      {/* <State2cmp/>
      <TestClassComp/>
      <Test/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/experience' element={<Experence/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <h1>HOME PAGE</h1>
      
      
    </div>
  );
}

export default App;
