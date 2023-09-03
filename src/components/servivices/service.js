import React from 'react'
import './service.css';
import HeartEmoji from "../img/heartemoji.png"
import Glasses from '../img/glasses.png'
import Humble from '../img/humble.png'
import Card from '../Card/card';
import Resume from '../img/RESUME.jpg'
import { useContext } from 'react'
import { themeContext } from '../../context'
import {motion} from 'framer-motion'

const Service= () =>{
  const transition = {duration : 2,type:'spring'}
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
return(
  <div className="services " id='Service'>
    {/* left side */}
    <div className="awesome">
        <span  style={{ color :darkMode? 'white' : ' '}}> My Awesome</span>
        <span>Services</span>
        <span> i have work done propar Structure your work . Use the right  candidate.
 <br /> so i am done your work time to time .</span>
         <a  href={Resume} download>
        <button className='button s-button'> Download CV
         </button></a>
         <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>
    {/* right side */}
    <div className="cards">
    <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={" Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
    {/* second card */}
    <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, boostrap, React"}
          />
        </motion.div>
    {/* thierd */}
    <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Create mobile design  web template and benner"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
    <div className="blur s-blur2 s-blur " style={{background :"var(--purple)"}}></div>
    </div>

  </div> 
)
}
export default Service;