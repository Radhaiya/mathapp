import React from 'react';
import { Link } from 'react-router-dom';

export default function SeqDropdown() {
  return <div className='container-md'>
     <div className="dropdown show">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <Link className="dropdown-item" to='SeqBase'>Find nth term</Link>
    <Link className="dropdown-item" to="#">Find first term</Link>
    <Link className="dropdown-item" to="#">Find difference</Link>
    <Link className="dropdown-item" to="#">Find no. of terms</Link>
  </div>
</div>
  </div>;
}
