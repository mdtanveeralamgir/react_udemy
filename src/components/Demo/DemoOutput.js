import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("Demo output");
  return <MyParagraph>{props.show ? "this is new!" : ""}</MyParagraph>;
};

export default DemoOutput;
