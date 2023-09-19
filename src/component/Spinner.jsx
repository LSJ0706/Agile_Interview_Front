import React from "react";
import loading from "../asset/iconmonstr-loading-10-120.png"
import "./css/Spinner.css"

function Spinner () {
    
    return(
        <>
        <img className="rotate" src={loading} alt="로딩중" />
        </>
        
    )
}

export default Spinner;