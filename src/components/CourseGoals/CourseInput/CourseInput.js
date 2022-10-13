import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  //Check if user entered valid input
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
    {/* `` (back tick) called template literal in js
      inside `` js expression can be added
      below the invalid class is being added dymanicly and invalid css class is defined in .css file
     */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        {/* Dymanicly change the value of label and input based on user's input */}
        <label>Course Goal</label>
        <input type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
