import MyParagraph from "./MyParagraph";
import React from "react";
const DemoOutput = (props) => {
  console.log("Demo output");
  return <MyParagraph>{props.show ? "this is new!" : ""}</MyParagraph>;
};

//React.memo checks the previous props and current passed props
//IF there is a change only then this DemoOutput component will re-evaualted
//Memo is not being added to every component because it comes with a cost
// React needs to store the previous props of component and compare with the current props
// Which is also expensive but need to make the judgement
export default React.memo(DemoOutput);
