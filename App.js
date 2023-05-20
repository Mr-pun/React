import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from the top of the REACT"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
