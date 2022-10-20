import ReactDOM from "react-dom/client";
import App from "./App";
import { AmountContextProvider } from "./components/Context/amount-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AmountContextProvider>
    <App />
  </AmountContextProvider>
);
