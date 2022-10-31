import { useState, useRef, useEffect } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [enterEmail, setEnterEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false); //Form is invalid if any input is invalid

  //Using useEffect to mark form is invalid if any input is invalid
  useEffect(() => {
    if (!nameError && !emailError) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameError, emailError]);

  const validateEnteredName = (event = null) => {
    const name = event ? event.target.value.trim() : enteredName.trim();
    if (name.length < 1) {
      setNameError(true);
    } else if (nameInputRef.current.value.trim().length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validateEnteredEmail = (event = null) => {
    const email = event ? event.target.value.trim() : enterEmail.trim();
    const emailIncludesAt = email.toString().includes("@");
    console.log(emailIncludesAt);
    console.log(email);
    if (email.length < 1 || !emailIncludesAt) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value.trim());
    validateEnteredName(event); //Because of the react scheduling the value from DOM should be passed here
  };

  const emailInputChangeHandler = (event) => {
    setEnterEmail(event.target.value.trim());
    validateEnteredEmail(event);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    validateEnteredName();
    validateEnteredEmail();
  };
  const nameInputClasses = nameError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailError
    ? "form-control invalid"
    : "form-control";

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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={validateEnteredEmail}
          type="email"
          id="email"
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <div>
        {nameError && <p>Please enter a name, with at least 4 char!</p>}
      </div>
    </form>
  );
};

export default SimpleInput;
