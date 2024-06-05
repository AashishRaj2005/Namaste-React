import React from "react";
import ReactDOM from "react-dom/client";
// jsx code is also there
const heading = <h1 id="heading">Hello world from jsx</h1>;

//todo react component can be written in many ways

const Heading = () => {
  return (
    <h1 id="heading" className="H1">
      Hello react functional component
    </h1>
  );
};
const H = () => true;

const h = () => <h1 className="baskar">Yeyyyy</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
