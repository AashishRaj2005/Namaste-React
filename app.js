import React from "react";
import ReactDOM from "react-dom/client";
// jsx code is also there
const heading = <h1 id="heading">Hello world from jsx</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
