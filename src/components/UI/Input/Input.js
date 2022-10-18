import classes from "./Input.module.css";
import { useRef, useEffect } from "react";

function Input(props) {
  const inputRef = useRef();

  //Using useRef the input is focused on bootup (first load up)
  //Only password will foucs since password is going to render after email input
  //Not the behavior we want
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          ref={inputRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.Blur}
        />
      </div>
    </>
  );
}

export default Input;
