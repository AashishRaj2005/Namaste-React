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
    <div className="logo_container">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=740"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = () => {
  return (
    <div className="Card">
      <img
        className="Food_img"
        src="https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-480x270.jpg"
        alt="Roti"
      />
      <h3>Apna Joint</h3>
      <h4>Tandoor &nbsp; &nbsp; Roti &nbsp;&nbsp; Chawal</h4>
      <h4>4.5</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" placeholder="Search..." className="search"></input>
      </div>

      <div className="res-container">
        <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
        <RestaurantCard /> 
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
