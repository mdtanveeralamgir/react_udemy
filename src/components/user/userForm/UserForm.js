import { useState } from "react";

function UserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

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
    setUserName("");
    setUserAge("");
    props.saveUser(newUser);
  };

  return (
    <form onSubmit={submitHanlder}>
      <label>Name</label>
      <input type="text" value={userName} onChange={nameChangeHandler} />
      <label>Age</label>
      <input type="text" value={userAge} onChange={ageChangeHandler} />
      <button type="submit">Add user</button>
    </form>
  );
}

export default UserForm;
