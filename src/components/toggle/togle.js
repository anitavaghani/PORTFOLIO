import React, { useContext } from 'react'
import './toggle.css'
import {BiSolidMoon} from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'
import { themeContext } from '../../context'

const Togle = ()=>{
  const theme=useContext(themeContext)
  const darkmode =theme.state.darkmode
  const handleclick=()=>{
    theme.dispatch({ type: "toggle" });
  }

    return(
  <div className="toggle" onClick={handleclick}>
       
    <BiSolidMoon />
     <BsSun/>
   <div className="t-button"
    style={darkmode ? { left: "2px" } : { right: "2px" }}
   >
   </div>
  
  </div>
    )
}
export default Togle;