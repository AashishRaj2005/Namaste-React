import { useState, useEffect } from "react";
import resList from "../Utils/mockdata";
import RestaurantCard from "./Card";

const Body = () => {
  const [ListofRest, setListofRes] = useState(resList);

  useEffect(() => {
    fetchData;
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
  const json = await Data.json();
  console.log(json);

  setListofRes(data?.cards?.1?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
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
        >
          Filter Res
        </button>
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
