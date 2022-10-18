import classes from "./Input.module.css";

const InputForm = (props) => {
  return(

  <>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      className={classes.input}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      min={props.min}
    />
  </>
  );
};

export default InputForm;
