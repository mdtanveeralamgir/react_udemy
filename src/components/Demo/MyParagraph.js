
//This will also re-evaluated everytime button clicks
//Because this is a children of DemoOutput and DemoOutput is children of App where state is managed
const MyParagraph = (props) => {
    console.log("MyParagraph output");
    return <p>{props.children}</p>;
  };
  
  export default MyParagraph;
  