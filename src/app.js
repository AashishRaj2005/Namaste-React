import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/body";
import Header from "./Components/header";
// jsx code is also there

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
