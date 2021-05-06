import React, {useState} from 'react'

const Volume = () => {
    let pie = 3.1428
    const[radius, setRadius] = useState(0);
    const[height, setHeight] = useState(0);
    const[volume, setVolume] = useState((pie*radius*radius*height)/3);

    function calculateVolume(){
        setVolume((pie*radius*radius*height)/3);
    }
    return (
        <div className = "Volume">
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
            <button onClick = {calculateVolume}>Find Volume</button>
            <h2>{volume}</h2>
        </div>
    )
}

export default Volume
