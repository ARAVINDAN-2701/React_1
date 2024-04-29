// import logo from './logo.svg';
import './App.css';
import Navbar from './components/functionalComponents/Navbar';
// import Footbar from './components/functionalComponents/Footbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/functionalComponents/About';
import Experence from './components/functionalComponents/Experience';

import Home from './components/functionalComponents/Home';

import Memo from './components/functionalComponents/memo';
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
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/exper' element={<Experence/>}></Route> 
      
        <Route path='/memo' element={<Memo/>}></Route>
        
      </Routes>
      {/* <Footbar/> */}
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
