import React from 'react';

export default function Card(props) {
  return <div className="col gy-5 gx-5">
    <div className="card mb-3 " style={{minWidth:"300px", minHeight:"20px"}}>
  <div className="row g-0">
    <div className="col-md-4" style={{minHeight:"100px"}}>
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    
;
}
