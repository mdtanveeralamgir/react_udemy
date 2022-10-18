import classes from "./Input.module.css";
import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  //Returns an obj to make internal items accessable to outside
  //In this case making activate function accessable to parent component
  //This hook is used vary rarely
  //The first param is the ref passed from parent component
  //That ref is the ref points to the parent ref
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });
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
});

export default Input;
