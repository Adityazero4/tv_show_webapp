import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShowsState from "./Context/shows/ShowsState";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShowsState>
        <App />
      </ShowsState>
    </BrowserRouter>
  </React.StrictMode>
);
