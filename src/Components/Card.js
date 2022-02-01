import React from 'react';
import { Link } from 'react-router-dom';


export default function Card(props) {


  const bgcolor = {
    backgroundColor: props.color,
    minHeight: "20px",
    minWidth: "300px",

  }

  const newlink=props.url
 


  return <div className="col gy-5 gx-5" >



    <div className="card mb-3 thiscard " style={bgcolor}   >
      <div className="row g-0">
        <div className="col-md-4" style={{ minHeight: "100px" }}>
          <img src='/assets/' className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title linktag" style={{ color: "#fff" }}><Link to={`${props.url}`}>{props.title}</Link></h5>
            <p className="card-text" >{props.description}</p>

          </div>
        </div>
      </div>
    </div>
  </div>

    ;
}
