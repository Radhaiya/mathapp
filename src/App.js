
import './App.css';
import Navbar from './Components/Navbar';
import Base from './Components/Base';
import Mensuration from './Components/Mensuration';

import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import SeqandSer from './Components/SeqandSer';
import SeqBase from './Components/SeqBase';
import Circle from './Components/Circle';


function App() {
  return (
   <>
  
    <Navbar />
    
    
      
  
     
       <Routes>
      <Route path="/" element={<Base/>}></Route>
      <Route path="/SeqandSer" element={<SeqandSer/>}> </Route>
      <Route path="/mensuration" element={<Mensuration/>}> </Route>
      <Route path="/mensuration/circle" element={<Circle/>}></Route>
      <Route path="/SeqandSer/SeqBase" element={<SeqBase/>}></Route>
      </Routes>
      
       
     
      
      
      
    
     
     
   </>
  );
}

export default App;
 