import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const SiteContext = createContext();

export const useSite = () => useContext(SiteContext);

export default function SiteProvider({ children }) {
    // const navigate = useNavigate();
    // const [field, setField] = useState("web");

    const pickDesign = () => {
      if (localStorage.getItem("field") !== "design") {
        localStorage.setItem("field", "design");
      };
    };

    const pickWeb = () => {
      if (localStorage.getItem("field") !== "web") {
        localStorage.setItem("field", "web");
      };
    };

    // console.log(field);
  
    return (
      <SiteContext.Provider value={{ pickDesign, pickWeb }}>
        {children}
      </SiteContext.Provider>
    );
  };