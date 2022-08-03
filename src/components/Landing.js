import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
// import headshot from "../assets/images/greg4.jpg";

function Landing(props) {
  const navigate = useNavigate();

  const [field, setField] = useState(["design", "web"]);

  // const pickField = () => {
  //   setField
  // }

  return (
    <div>
        <section id="about">

            <div id="bio" onClick={() => navigate("/"+`${field[0]}`)}>
                <h1>Greg Zaragoza is a <span className="bioBold">graphic designer</span>.</h1>
            </div>

            <div id="bio2" onClick={() => navigate("/"+`${field[1]}`)}>
                <h1>Greg Zaragoza is a <span className="bioBold2">web developer</span>.</h1>
            </div>

            {/* <div id="headshot"></div> */}

        </section>
    </div>
  );
}

export default Landing;
