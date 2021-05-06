import React, {useState} from 'react'

const Tsa = () => {
    let pie = 3.1428
    const[radius, setRadius] = useState(0);
    const[height, setHeight] = useState(0);
    const[tsa, setTsa] = useState((pie*radius*radius)+((pie*radius)*((radius*radius) + (height*height))**0.5));

    function calculateTsa(){
        setTsa((pie*radius*radius)+((pie*radius)*((radius*radius) + (height*height))**0.5));
    }
    return (
        <div className = "Tsa">
            <div className = "number-inputs">
                <input
                type = "number"
                value = {radius}
                onChange = { e => setRadius(+e.target.value)}
                placeholder = "0"
                 />
                 <input
                  type = "number"
                  value = {height}
                  onChange = {e => setHeight(+e.target.value)}
                  placeholder = "0"
                  />
            </div>
            <button onClick = {calculateTsa}>Find TSA</button>
            <h2>{tsa}</h2>
        </div>
    )
}

export default Tsa
