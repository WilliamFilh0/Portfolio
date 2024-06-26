import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Global from "./styles/global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
);
