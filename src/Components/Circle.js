import React, { useState } from 'react';

export default function Circle() {

    const bgcolor = {
        minWidth: "200px"
    }

    const [radius, setradius] = useState('');
    const [Tsarea, setTsarea] = useState('');
    const [CSarea, setCSarea] = useState('');
    const [Volume, setVolume] = useState('');

    const handleonradius = (event) => {
        setradius(event.target.valueAsNumber)

    }

    const handleonTsa = (event) => {
        setTsarea(event.target.valueAsNumber)

    }

    const handleonDiff = (event) => {
        setCSarea(event.target.valueAsNumber)

    }

    const handleVol = (event) => {
        setVolume(event.target.valueAsNumber)

    }

    const calculation = (e) => {
        const vol=radius*radius*radius*1.33*3.14
        setVolume(vol)
        const TSA=4*3.14*radius*radius
        setTsarea(TSA)
    }




    return <div className='container-md'>

        <div className="row">
            <div className="col">
                <div className="input-group mb-3 my-5" style={{ minWidth: "300px" }}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Radius</span>
                    <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={radius} onChange={handleonradius} />
                </div>
            </div>

            <div className='row'>
                <div className="col">
                    <div className="input-group mb-3 my-5" style={{ minWidth: "300px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-default">Radius of Sphere</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={Volume} onChange={handleVol} />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3 my-5" style={{ minWidth: "300px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-default">Total Surface Area</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={Tsarea} onChange={handleonTsa} />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3 my-5" style={{ minWidth: "300px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-default">Curved Surface Area</span>
                        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={CSarea} onChange={handleonDiff} />
                    </div>
                </div>
            </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={calculation}>Calculate</button>

    </div>
}
