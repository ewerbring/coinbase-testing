import Api from "./Api";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import React, { useState, useEffect } from "react";
import P5 from "./P52";

let isMobile = false;

function Main() {
  const [width, setWidth] = useState(0);
  window.addEventListener("resize", setWidth);

  useEffect(() => {
    let width = window.innerWidth;
    console.log(`window width is ${width}`);
    width < 800 ? (isMobile = true) : (isMobile = false);
  }, [width]);

  return (
    <div>
      {/* <Api /> */}
      <P5 />
      {/* {isMobile ? <Mobile /> : <Desktop />} */}
    </div>
  );
}

export default Main;
