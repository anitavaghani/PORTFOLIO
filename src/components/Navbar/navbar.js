import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'
import Togle from '../toggle/togle';
import {BiSolidMoon} from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'
import Service from '../servivices/service';
import Portfolio from '../portfolio/portfolio';
import Work from '../Works/Work';
const  Navbar = () =>{
    return(
   <div className="nav-wrapper" id='Navbar'>
    <div className="nav-left">
        <div className="nav-name">Andrew </div>
        <Togle/>
        
    </div>
    <div className="nav-right">
     <div className="nav-list">
     <ul style={{ listStyleType: "none" }}>
        <Link spy={true} to='Navbar' smooth={ true} activeClass='activeClass'>
            <li>Home</li>
            </Link>
            <Link spy={true} to='Service' smooth={ true} activeClass='activeClass'>
            <li>Services</li>
            </Link>
            {/* <Link spy={true} to='Portfolio' smooth={ true} activeClass='activeClass'>
            <li>Portfolio</li>
            </Link> */}
            <Link spy={true} to='Work' smooth={ true} activeClass='activeClass'>
            <li>Works</li>
            </Link>
            
          
        </ul>
        </div>
    
 <button className='button n-button'>Contact  </button>
     </div>
   </div>

    )
}
export default Navbar;