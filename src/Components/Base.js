import React from 'react';
import Card from './Card';

export default function Base() {
  return <div className="container my-5" >
  <div className="row justify-content-md-center">
  <Card title="Sequence and Series" description="This is a dummy text below the heading that describes about the topic" color="#FF00A8" url='/SeqandSer' />
  <Card title="Mensuration"  description="This is a dummy text below the heading that describes about the topic" color="#8000FF" url='/mensuration'/>
  <Card title="Percentage"  description="This is a dummy text below the heading that describes about the topic" color="#ff005c"/>
    
  </div>

  <div className="row row justify-content-md-center">
  <Card title="Percentage"  description="This is a dummy text below the heading that describes about the topic" />
  <Card title="Percentage"  description="This is a dummy text below the heading that describes about the topic"/> 
  <Card title="Percentage"  description="This is a dummy text below the heading that describes about the topic"/> 
    
    
    

    
  </div>
  
</div>



  
  ;
}
