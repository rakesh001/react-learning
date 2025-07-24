import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is h1 from React.createElement"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Using JSX

const JSXHeading = <h1 id="heading"> This is h1 from JSX 🚀🚀</h1>;

root.render(JSXHeading);
