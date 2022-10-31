import { useState } from "react";
const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(inputValue);
  const hasError = isTouched && !inputIsValid;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value.trim());
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
