import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    inputValue: enteredFirstName,
    inputIsValid: firstNameIsValid,
    hasError: firstNameError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(validateFirstName);
  const {
    inputValue: enteredLastName,
    inputIsValid: lastNameIsValid,
    hasError: lastNameError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(validateLastName);
  const {
    inputValue: enteredEmail,
    inputIsValid: emailIsValid,
    hasError: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  function validateFirstName(value) {
    return value.length >= 4;
  }
  function validateLastName(value) {
    return value.length >= 4;
  }
  function validateEmail(value) {
    return value.length > 1 && value.includes("@");
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = firstNameError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
