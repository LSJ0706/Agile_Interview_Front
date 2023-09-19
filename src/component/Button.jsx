import React from "react";
import "./css/Button.css"

function Button ({name,onClick,inputLen}) {
    
    return(
        <>
        <button className="btn" onClick={onClick} disabled={inputLen === 0}>{name}</button>
        </>
        
    )
}

export default Button;