import { motion, animate } from "framer-motion";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(true)

  const button = document.querySelector(".button");

  const sequence1 = [
    [".overlay", { x: "-100vw" }, { ease: "easeOut", duration: 1.5 }],
    [".first", { left: "0" }, { duration: 1 }],
    [".overlay", { x: "-60vw" }, { ease: "easeOut", duration: 1 }, { at: 0.1 }],
    [".second", { right: "0" }, { duration: 1 }, { at: "<" }],
    //[".overlay", { x: ["-10%"] }, {  ease: "easeOut", duration: 1}, {at: 1}]
  ];

  const sequence2 = [
    [".second", { right: "-100vw" }, { duration: 1 }],
    [".overlay", { x: "-100vw" }, { ease: "easeOut", duration: 1 }],
    [".first", { left: "-1500px" }, { duration: 1 }],
    [".overlay", { x: "0" }, { ease: "easeOut", duration: 1 }],
  ];

  return (
    <div className="App">
      <div className="main">
        <div className="overlay" id="overlay"></div>
        <div className="first"></div>
        <div className={visible == true? "second" : "second disabled"}></div>
        <button
          className={ "button"}
          onClick={
            active == true
              ? () => {
                  animate(sequence2);
                  setActive(false);
                  setVisible(false)
                 // setVisible(true)
                }
              : () => {
               // setVisible(false)
                  animate(sequence1);
                  setActive(true);
                  setVisible(true)
                }
          }
        >
          {active == false ? "Run" : "Revert"}{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
