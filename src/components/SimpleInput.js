import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    inputValue: enteredName,
    inputIsValid: enteredNameIsValid,
    hasError: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(validateEnteredName);
  const {
    inputValue: enteredEmail,
    inputIsValid: enteredEmailIsValid,
    hasError: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEnteredEmail);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredNameIsValid) {
    formIsValid = true;
  }

  function validateEnteredName(value) {
    return value.length >= 4;
  }

  function validateEnteredEmail(value) {
    const emailIncludesAt = value.includes("@");

    return value.length > 1 && emailIncludesAt;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetEmailInput();
    resetNameInput();
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameError && <p>Name must not be empty!!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailError && <p>Enter a valid email!!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
