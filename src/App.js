import React, { useState, useCallback } from "react";
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
  /*
  * in Js only premitive values can be compared by ===
  * false === false : true
  * 'hi' === 'hi' : true
  * {} === {} : false, because they are pointing to different memory location
  * useCallback stores the object is a special place in react to overcome this comparison
  */
  const onClickHandler = useCallback(() => {
    setShowP((prev) => {
      return !prev;
    });
  }, []);
   //Like useEffect needs to pass the all dependencies as a array to useCallback
   //Since setShowP is managed by react so this is not necessary in this case
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/*
       * even if the changing state is not passed to the DemoOutput still the demo output will re-evaluated
       * because DemoOutput is a function and part of App return statement where state is being handled
       * But the paragraph inside DemoOutput will not change/re-evaluated since the props is not changing inside DemoOutput
       */}
      <DemoOutput show={false} />
      <Button onClick={onClickHandler}>Toggle</Button>
    </div>
  );
}

export default App;
