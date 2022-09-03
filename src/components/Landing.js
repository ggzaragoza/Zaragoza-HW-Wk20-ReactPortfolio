import React, { useEffect } from "react";
// import { useSite } from "../utils/SiteContext";
import { useNavigate } from "react-router-dom";
import '../App.css';
// import headshot from "../assets/images/greg4.jpg";
// import SiteProvider from "../utils/SiteContext";

export default function Landing() {
  // const { field, pickDesign, pickWeb } = useSite();

  const navigate = useNavigate();
  const navigateTo = target => () => navigate(target);

  // useEffect(() => {
  //   navigate("/"+`${field}`);
  // }, [field])

  // const [field, setField] = useState(["design", "web"]);

  // const pickField = () => {
  //   setField
  // }

  return (
    <div>
      {/* <SiteProvider> */}
      <section id="about">

        {/* <div id="bio" onClick={pickDesign} onClick={navigate("/design")}> */}
        <div id="bio" onClick={navigateTo("/design")}>
            <h1>Greg Zaragoza is a <span className="bioBold">graphic designer</span>.</h1>
        </div>

        <div id="bio2" onClick={navigateTo("/web")}>
            <h1>Greg Zaragoza is a <span className="bioBold2">web developer</span>.</h1>
        </div>

        {/* <div id="headshot"></div> */}

      </section>
      {/* </SiteProvider> */}
    </div>
  );
}

// export default Landing;
// export SiteProvider;
