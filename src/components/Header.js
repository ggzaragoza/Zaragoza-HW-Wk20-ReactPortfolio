import React from "react";
import '../App.css';
import gzLogo from "../assets/images/aug21icons.gif";

function Header() {
  return (
    <div>
        <header>
            <ul>
                <li> <a href="#work">Projects</a> </li>
            </ul>
            
            <img src={gzLogo} alt="Rotating gif of GZ initial icons"/>

            <ul>
                <li> <a href="#contact">Contact</a> </li>
            </ul>
        </header>
    </div>
  );
}

export default Header;
