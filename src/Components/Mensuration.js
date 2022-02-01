import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

export default function mensuration() {
  return <>
      <div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <Link to="circle" className="list-group-item list-group-item-action">Circle</Link>
  <Link to="#" className="list-group-item list-group-item-action">A third link item</Link>
  <Link to="#" className="list-group-item list-group-item-action">A fourth link item</Link>
 
</div>
  </>
}
