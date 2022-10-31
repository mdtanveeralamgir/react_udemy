import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameError, setNameError] = useState(false);

  const validateEnteredName = (name = enteredName.trim()) => {
    if (name.length < 1) {
      setNameError(true);
    } else if (nameInputRef.current.value.trim().length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    console.log(enteredName);
  };
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value.trim());
    validateEnteredName(event.target.value.trim()); //Because of the react scheduling the value from DOM should be passed here
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    validateEnteredName();
  };
  const nameInputClasses = nameError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          onBlur={validateEnteredName}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      <div>
        {nameError && <p>Please enter a name, with at least 4 char!</p>}
      </div>
    </form>
  );
};

export default SimpleInput;
