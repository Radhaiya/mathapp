import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Base from './Components/Base';

import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import SeqandSer from './Components/SeqandSer';

function App() {
  return (
   <>
  
    <Navbar />
    
      
  
     
     <Routes>
     <Route path="/" element={<Base/>}></Route>
     <Route path="/SeqandSer" element={<SeqandSer/>}></Route>

      </Routes>
      
       
     
      
      
      
    
     
     
   </>
  );
}

export default App;
 