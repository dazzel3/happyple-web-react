import React, { cloneElement, useState } from 'react';
import '../../css/contents/Virus.css'
import virus3 from '../../assets/virus3.png'

function Virus3() {
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
                <img className="virus" src={virus3}  
                />) 
                : null}
                </div>
            </div>
            
        </div>
        
    )
        
}

export default Virus3;