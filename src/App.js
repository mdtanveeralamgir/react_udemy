import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";
/*
 * React loads only the elements that has changed rather than reloading each elements a component has
 * In the below example the console.log will re-run every time the toggle button is clicked
 * Because the whole component re-loads
 * But only the <p> will be added/removed since from previous state to current state only <p> is changing
 */
function App() {
  const [showP, setShowP] = useState(false);

  console.log("app running");
  const onClickHandler = () => {
    setShowP((prev) => {
      return !prev;
    });
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={onClickHandler}>Toggle</Button>
    </div>
  );
}

export default App;
