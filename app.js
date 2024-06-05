import React from "react";
import ReactDOM from "react-dom/client";
// jsx code is also there
const heading = <h1 id="head">Hello world from jsx</h1>;

//todo react component can be written in many ways

const Heading = () => {
  return (
    <div>
      {heading}
      <h1 id="heading">Hello react functional component</h1>
      {console.log("mission Success")}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
