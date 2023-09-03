import React from 'react'
import './intro.css'
import FloatingDiv from '../floatingDiv/FloatingDiv'
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Instragram from '../img/instagram.png'
import Vector1 from "../img/Vector1.png"
import Vector2 from "../img/Vector2.png"
import Boy from "../img/boy.png"
import glassesimoji from '../img/glassesimoji.png'
import FloatingDiv2 from '../floatingDiv2/Floatingdiv2'
import { useContext } from 'react'
import { themeContext } from '../../context'
import {motion} from 'framer-motion'
const Intro = () =>{
  const transition = {duration : 2,type:'spring'}
   const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
    return(
        <div className="intro">
          <div className="intro-left">
      
        <div className="intro-name">
            <span className='child' style={{fontSize:'3rem', color :darkMode? 'white' : ' '}}>Hy! I am </span>
            <span> Anita Vaghani</span>
            <span>Frontend Developer traning in Ad-Teach institute in  web designing and development, producing the Quality work</span>
        </div>
           <button className=' button intro-button '>Hire Me</button>
           <div className="intro-icon">
            <a href='https://github.com/anitavaghani'> <img src={Github} alt="" /> </a>
           <a href="https://www.linkedin.com/feed/"><img src={LinkedIn} alt="" /></a> 
           <a  href='https://www.instagram.com/anita_vaghani/' > <img src={Instragram} alt=""/></a>
           </div>
          </div>
          <div className=" intro-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Boy} alt="" />
          <motion.img
          initial={{left:'-36%'}}
          whileInView={{left:'-24%'}}
          transition={{transition}}

          src={glassesimoji} alt="" />
       

<motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv  />
        </motion.div>
          {/* <div  style={{top:'18rem',left :'0rem'}}>
          <FloatingDiv2 />
          </div> */}
<motion.div
         initial={{ left: "9rem", top: "18rem" }}
         whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{top:'18rem',left :'0rem'}}
        >
          <  FloatingDiv2 />
        </motion.div>

          {/* blue div */}
         <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
         <div className="blur" style={{

          background:"#c1f5ff",
          top :'17rem',
          width :'21rem',
          height :'11rem',
          left :'-7rem '

         }}></div>
          </div>
        </div>
    )
}
export default Intro