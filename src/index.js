
import ReactDOM from "react-dom/client";
import { AuthContextprovider } from "./components/Context/auth-context";


import "./index.css";
import App from "./App";
import { useContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextprovider>
    <App />
  </AuthContextprovider>
);
