import React from "react";
import '../App.css';
import phoneIcon from "../assets/images/phone.png";
import asterisk from "../assets/images/email.png";
import githubLogo from "../assets/images/github.png";
import linkedinLogo from "../assets/images/linkedin.png";
import igLogo from "../assets/images/ig.png";
import dropboxLogo from "../assets/images/dropbox.png";

function Contact() {
  return (
    // <div>
    //     <header>
    //     <ul>
    //         <li> <a href="#work">Projects</a> </li>
    //     </ul>
        
    //     <img src={gzLogo} alt="Rotating gif of GZ initial icons"/>

    //     <ul>
    //         <li> <a href="#contact">Contact</a> </li>
    //     </ul>
    //     </header>
    // </div>
    <section id="contact">

    <div id="address">
        <div id="phone">
            <img src={phoneIcon} alt="Keypad icon"/>
            <p>210 833 1674</p>
        </div>
        <div>
            <img src={asterisk} alt="At symbol"/>
            <p>greg.g.zaragoza@gmail.com</p>
        </div>
    </div>

    <div id="socials">
        <a href="https://www.github.com/ggzaragoza/" target="_blank" rel="noreferrer"><img href="https://www.github.com/ggzaragoza/" src={githubLogo} alt="Github icon"/></a>
        <a href="https://www.linkedin.com/in/gregzaragoza/" target="_blank" rel="noreferrer"><img href="https://www.linkedin.com/in/gregzaragoza/" src={linkedinLogo} alt="LinkedIn icon"/></a>
        <a href="https://www.instagram.com/gregzaragoza/" target="_blank" rel="noreferrer"><img href="https://www.instagram.com/gregzaragoza/" src={igLogo} alt="Instagram icon"/></a>
        <a href="https://www.dropbox.com/s/wecoeuqmdpty3ej/Greg%20Zaragoza%20-%20Sep.%202021%20Resume.pdf?dl=0" target="_blank" rel="noreferrer">
            <img href="https://www.dropbox.com/s/wecoeuqmdpty3ej/Greg%20Zaragoza%20-%20Sep.%202021%20Resume.pdf?dl=0"
            src={dropboxLogo}
            alt="Dropbox icon"/>
        </a>
    </div>

</section>
  );
}

export default Contact;
