import React from "react";
import './fotter.css'
import Wave from "../img/wave.png";
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
const Fotter = () =>{
    return(
        <div className="">
<div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>vaghanianita@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.instagram.com/anita_vaghani/">   <BsInstagram/> </a>
       <a href="https://www.facebook.com/profile.php?id=100094506496809">    <AiFillFacebook/> </a>
         <a href="https://github.com/anitavaghani"> <AiFillGithub/></a>   
      
        </div>
      </div>
    </div>
            
        </div>
    )
}

export default Fotter