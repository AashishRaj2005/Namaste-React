import React from "react";
import ReactDOM from "react-dom/client";
import { Img } from "react-image";

// jsx code is also there
const heading = <h1 id="head">Hello world from jsx</h1>;

// **todo

/*make a header
-logo
-searchbar
-profile

body

footer

*/

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740" />
    </div>
    <div className="navItems">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Applayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
