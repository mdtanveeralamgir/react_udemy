import { useState } from "react";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

function UserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError]  = useState('');

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHanlder = (event) => {
    event.preventDefault();

    const newUser = {
      id: Math.random().toString(),
      name: userName,
      age: userAge,
    };

    if(newUser.name === '' || newUser.age === '')
    {
      setError({
        title: "Invalid input",
        message: "Please fill out all the fields"
      });
      return;
    }
    if(+newUser.age < 0)
    {
        setError({
            title: "Invalid input",
            message: "The age has to be a positive number"
          });
      return;
    }

    setUserName("");
    setUserAge("");
    props.saveUser(newUser);
  };

  const errorHanlder = () => 
  {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onOkay={errorHanlder}/> }
      <form onSubmit={submitHanlder}>
        <label>Name</label>
        <input type="text" value={userName} onChange={nameChangeHandler} />
        <label>Age</label>
        <input type="text" value={userAge} onChange={ageChangeHandler} />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default UserForm;
