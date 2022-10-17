import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //It will run after all the rendering is done and if the dependencies changed
  //if the dependencies array is empty then it's called onMount: only run the useEffect call back function when the
  // component starts
  useEffect(() => {
    const loggingStatus = localStorage.getItem("isLoggedIn");

    if (loggingStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    //AutoContext is not a component so
    //If the value inside AuthContext obj is static then authcontext.provider is not needed
    //It's only needed when the value of the Authcontext obj changes
    <AuthContext.Provider
      value={{ //The attribute has to be named value
        isLoggedIn: isLoggedIn
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
