import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  //The use state used in useCounter will be tied in this Component
  //IF useCounter is being used in different component every component will receive its own useState
  //The customer is not shared rather creates the individual function for each component
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
