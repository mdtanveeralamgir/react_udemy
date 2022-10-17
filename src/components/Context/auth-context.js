import React, { useState, useEffect } from "react";
//Since it's not a component so the naming convension doesn't apply

//AuthContext is an object that contains an auth component
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //Passing a dumy function
  onLogin: (email, password) => {} //Passing a dumy function
});

/* 

* If a is needed everywhere in then it should be wrapped in the App component since it's the root component
* The context will be availabe for the components it's wrapped to and down from that component chain

*/




//To extract the logic from App.js a component can be made and passed instead of AuthContext
export function AuthContextprovider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggingStatus = localStorage.getItem("isLoggedIn");
    
    if (loggingStatus === "1") {
        setIsLoggedIn(true);
    }
}, []);

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
