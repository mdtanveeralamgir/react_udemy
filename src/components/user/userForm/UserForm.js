import { useState, useRef } from "react";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

function UserForm(props) {
  //Always returns an object
  //Always has a current prop which connects to the current value of the input
  //By default it's undefined
  //after first run it will be the dom node
  // in below case it will be <input /> node/element
  //current value can be obtained nameInputRef.current.value
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [error, setError] = useState("");



  const submitHanlder = (event) => {
    event.preventDefault();
    const currentName = nameInputRef.current.value;
    const currentAge = ageInputRef.current.value;
    const newUser = {
      id: Math.random().toString(),
      name: currentName,
      age: currentAge,
    };

    if (currentName === "" || currentAge === "") {
      setError({
        title: "Invalid input",
        message: "Please fill out all the fields",
      });
      return;
    }
    if (+currentAge < 0) {
      setError({
        title: "Invalid input",
        message: "The age has to be a positive number",
      });
      return;
    }

    props.saveUser(newUser);
    //erase the input
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHanlder = () => {
    setError(null);
  };

  return (
    // Using JSX element instead of div
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={errorHanlder}
        />
      )}
      <form onSubmit={submitHanlder}>
        <label>Name</label>
        <input
          type="text"
          ref={nameInputRef}
        />
        <label>Age</label>
        <input
          type="text"
          ref={ageInputRef}
        />
        <button type="submit">Add user</button>
      </form>
    </Wrapper>
  );
}

export default UserForm;
