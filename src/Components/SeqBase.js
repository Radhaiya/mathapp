import React from 'react';
import { useState } from 'react';

export default function SeqBase() {
   
    //First Term
  const [firstterm, setfirstterm] = useState('');
  const handleonChange=(event)=>{
   setfirstterm(event.target.valueAsNumber)
      }
 
    //No of Terms
const [NoOfTerm, setNoOfTerm] = useState('');
const handleonNoofterms=(event)=>{
    setNoOfTerm(event.target.valueAsNumber)
    }
 
   //Difference
   const [diff, setdiff] = useState('');
   const handleonDiff=(event)=>{
       
       setdiff(event.target.valueAsNumber)
   }

//Answer
const [ans, setans] = useState('');
const handleans=(event)=>[
    setans(event.target.valueAsNumber)
]

   const calculation=(event)=>{
       const newans=firstterm+(NoOfTerm-1)*diff
       setans(newans)      
   }
  

 return    <>



<div className="row">
    <div className="col">
    <div className="input-group mb-3 my-5" style={{minWidth:"300px"}}>
  <span className="input-group-text" id="inputGroup-sizing-default">First term</span>
  <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={firstterm} onChange={handleonChange} />
</div>
    </div>
    <div className="col">
    <div className="input-group mb-3 my-5" style={{minWidth:"300px"}}>
  <span className="input-group-text" id="inputGroup-sizing-default">No of terms</span>
  <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={NoOfTerm} onChange={handleonNoofterms}/>
</div>
    </div>
    <div className="col">
    <div className="input-group mb-3 my-5" style={{minWidth:"300px"}}>
  <span className="input-group-text" id="inputGroup-sizing-default">Difference</span>
  <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={diff} onChange={handleonDiff}/>
</div>
    </div>
  </div>
  <div className="col">
    <div className="input-group mb-3 my-5" style={{minWidth:"300px"}}>
  <span className="input-group-text" id="inputGroup-sizing-default">Nth Term is</span>
  <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={ans} onChange={handleans} />
</div>
    </div>
    <button type="button" className="btn btn-primary" onClick={calculation}>Calculate</button>
  

  </>
}
