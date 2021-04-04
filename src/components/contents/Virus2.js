import React, { cloneElement, useState } from 'react';
import '../../css/contents/Virus.css'
import virus2 from '../../assets/virus2.png'

function Virus2() {
    const [checked, setChecked] = useState(true);

    const change = () => {
        setChecked(false);
    };


    return (        
        <div className="kill-virus">
            <div className="virus-container">
                <div className="kill-btn virus" onClick={change}></div>
                <div className="img">
                {checked === true ? (
                <img className="virus" src={virus2}  
                />) 
                : null}
                </div>
            </div>
            
        </div>
        
    )
        
}

export default Virus2;