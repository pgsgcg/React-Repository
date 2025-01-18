import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function HookDemo() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" style={{width:100, background:"blue" }} onClick={() => setColor("blue")}>Blue</button> &nbsp;
      <button type="button" style={{width:100, background:"red" }} onClick={() => setColor("red")} >Red</button> &nbsp;
      <button type="button" style={{width:100, background:"pink" }} onClick={() => setColor("pink")} >Pink</button> &nbsp;
      <button type="button" style={{width:100, background:"green" }} onClick={() => setColor("green")} >Green</button>
    </>
  );
}

export default HookDemo;
