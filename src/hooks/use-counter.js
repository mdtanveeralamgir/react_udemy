import { useState, useEffect } from "react";

//Convension to start with use for hook name
const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prev) => prev + 1);
      } else {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  //Can be returned anything [], nuimber, {}
  return counter;
};

export default useCounter;
