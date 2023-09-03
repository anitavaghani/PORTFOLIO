import React from "react";
import Crown from '../img/crown.png'
import './floatingDiv.css'

const FloatingDiv =()=>{
    return(
        <div className="floatingdiv">
        <img src={Crown} alt="" />
        <span>
            Web 
            <br />
            Developer
        </span>
        </div>
    )
}
export default FloatingDiv;