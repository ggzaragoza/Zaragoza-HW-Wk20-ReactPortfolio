import React from "react";
import { useSite } from "../utils/SiteContext";
import '../App.css';

import gzLogo from "../assets/images/aug21icons.gif";

function Header() {
  const { pickDesign, pickWeb } = useSite();

  return (
    <div>      
        <header>
          <ul>
            <li className="header-left"><a href="/" onClick={pickDesign}>DESIGN</a></li>
            <li className="header-left"><a href="/" onClick={pickWeb}>WEB</a></li>
          </ul>
          
          <img src={gzLogo} alt="Rotating gif of GZ initial icons" style={{width: "50px", height: "50px"}}/>

          <ul><li><a href="#contact">CONTACT</a></li></ul>
        </header>
    </div>
  );
}

export default Header;
