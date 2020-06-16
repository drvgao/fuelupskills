import React from "react";
import { PinkBar } from "./gradients/PinkBar";
import { PinkBar2 } from "./gradients/PinkBar2";

const ThemeTest = () => {
  return (
    <div>
      <h1>Theme Test component</h1>
      <div className="Tangerine">Tangerine Check </div>
      <PinkBar>
        <p>Awesome button</p>
      </PinkBar>
      <br />
      <br />
      <PinkBar2>
        <div>gradients</div>
      </PinkBar2>
    </div>
  );
};

export default ThemeTest;
