
import { useContext } from 'react';
import './App.css'
import Experience1 from './components/Expireance/Experience1.js';

import Navbar from './components/Navbar/navbar'
import Work from './components/Works/Work';
import Contact from './components/conatct/contact';
import Fotter from './components/fotter/fotter';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Service from './components/servivices/service';
// import Togle from './components/toggle/togle';
import { themeContext } from './context';



function App() {
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="App" 
    style={{background: darkMode? 'black':'',
    color :darkMode? 'white' : ' '
  }}
    
    >
     <Navbar/>
     <Intro/>
     <Service/>
     {/* <Experience1/> */}
     <Work/>
     {/* <Portfolio/> */}
     <Contact/>
     <Fotter/>
     {/* <Togle/> */}
    </div>
  );
}

export default App;
