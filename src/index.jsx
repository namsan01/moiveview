import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./css/index.css";
import "./css/normalize.css";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
