import { useState } from "react";
import resList from "../Utils/mockdata";
import RestaurantCard from "./Card";

const Body = () => {
  const [ListofRest, setListofRes] = useState(resList);
  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" placeholder=" Search..." className="search"></input>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRest.filter(
              (res) => res.info.veg == true
            );
            setListofRes(filteredList);
          }}
        >Filter Res</button>
      </div>

      <div className="res-container">
        {ListofRest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
