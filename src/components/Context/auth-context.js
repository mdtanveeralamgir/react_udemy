import React from "react";
//Since it's not a component so the naming convension doesn't apply

//AuthContext is an object that contains an auth component
const AuthContext = React.createContext({
  isLoggedIn: false,
});


/* 

* If a is needed everywhere in then it should be wrapped in the App component since it's the root component
* The context will be availabe for the components it's wrapped to and down from that component chain

*/
export default AuthContext;
