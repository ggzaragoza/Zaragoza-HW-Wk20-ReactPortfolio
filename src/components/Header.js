import React from "react";
import { useSite } from "../utils/SiteContext";
import '../App.css';

import gzLogo from "../assets/images/aug21icons.gif";

function Header() {
  const { pickDesign, pickWeb } = useSite();
  const field = localStorage.getItem("field");

  return (
    <div>      
        <header>
          <div><a href="/"><img src={gzLogo} alt="Rotating gif of GZ initial icons" style={{width: "50px", height: "50px"}}/></a></div>
          <div>
            <ul className="header-left">
              {field === "web" || !field ?
                <li><a href="/" onClick={pickDesign}>DESIGN</a></li> :
                <li><a href="/" onClick={pickWeb}>WEB</a></li>
              } 
            </ul>
            <ul className="header-left"><li><a href="#contact">CONTACT</a></li></ul>
          </div>
        </header>
    </div>
  );
}

export default Header;
