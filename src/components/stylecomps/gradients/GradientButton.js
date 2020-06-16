import React from "react";
import { Gradient } from "uigradients";

const GradientButton = () => {
  return (
    <div>
      <Gradient preset="cherry">
        <h1>
          This will draw a div with a cherry gradient, like the one you're
          looking at right now.
        </h1>
      </Gradient>
    </div>
  );
};

export default GradientButton;
