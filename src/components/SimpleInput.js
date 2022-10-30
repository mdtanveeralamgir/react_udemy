import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameError, setNameError] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value.trim());
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length < 1) {
      setNameError(true);
    } else if (nameInputRef.current.value.trim().length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    console.log(enteredName);
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
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
