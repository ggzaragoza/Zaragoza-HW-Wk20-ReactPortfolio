import React from "react";
import '../App.css';
// import headshot from "../assets/images/greg4.jpg";

function About() {
  return (
    <div>
        <section id="about">

            <div id="bio">
                <h1>Greg Zaragoza is a <span className="bioBold">graphic designer</span>, <span className="bioBold">photographer</span>, and <span className="bioBold">web developer</span> from and based in San Antonio, Texas.</h1>
            </div>

            <div id="headshot"></div>

        </section>
    </div>
  );
}

export default About;
