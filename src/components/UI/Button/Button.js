import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

//Even the button is wrapped with memo still it will re-evaluated everytime it's clicked and App component re-executes
// Because button has a onClick function which runs everytime App runs 
export default React.memo(Button);
