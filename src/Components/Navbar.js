import React from 'react';
import SeqandSer from './SeqandSer';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <>

  
  <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Maths Solutions</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" to="/SeqandSer">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


  </div>
 
  </>
}
