import React from 'react'
import './work.css'
import Upwork from '../img/Upwork.png' 
import Fiverr from '../img/fiverr.png'
import Amazon from '../img/amazon.png'
import Shopify from '../img/Shopify.png'
import Facebook from '../img/Facebook.png'
import { useContext } from 'react'
import { themeContext } from '../../context'
import { motion } from "framer-motion";
// import {Link} from 'react-scroll'

const Work =()=>{
    const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;
    return(
        <div className="works" id='Work'>
               <div className="awesome">
        <span style={{ color :darkMode? 'white' : ' '}}> Works for All these</span>
        <span></span>
        <span> I have   knowledge of graphics designer and web designing   <br />  in HTML CSS JAVASCRIPT REACT JS.
        <br />
        and basic knowledge   in C C++. <br />  
        </span>
         
        <button className='button s-button'> Hire Me
         </button>
         {/* <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div> */}
    </div>

    {/* right side  */}
    <div className="w-right">
        <motion.div 
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}className="w-maincircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </motion.div>
        {/* Background circul */}
        <div className="w-backCircle blueCircle "></div>
        <div className="w-backCircle yellowCircle "></div>

    </div>
        </div>
    )
}
export default Work