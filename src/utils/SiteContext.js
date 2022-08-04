import React, { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

export const SiteContext = createContext();

export const useSite = () => useContext(SiteContext);

export default function SiteProvider({ children }) {
    // const navigate = useNavigate();
    const [field, setField] = useState('');

    const pickDesign = () => {
        // navigate("/design");
        return setField("design")
    };

    const pickWeb = () => {
        // navigate("/web");
        return setField("web")
    };

    console.log(field);
  
    return (
      <SiteContext.Provider value={{ field, pickDesign, pickWeb }}>
        {children}
      </SiteContext.Provider>
    );
  };