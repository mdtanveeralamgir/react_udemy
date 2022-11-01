import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialState;
};
const useInput = (validateInput) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);
  // const [inputValue, setInputValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(inputState.value);
  const hasError = inputState.isTouched && !inputIsValid;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value.trim() });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    inputValue: inputState.value,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
