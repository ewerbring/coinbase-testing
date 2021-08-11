import Api from "./Api";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import React, { useState, useEffect } from "react";

let isMobile = false;

function Main() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let width = window.innerWidth;
    console.log(`window width is ${width}`);
    width < 800 ? (isMobile = true) : (isMobile = false);
  });

  window.addEventListener("resize", setCount);

  return (
    <div>
      {/* <Api /> */}
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default Main;
