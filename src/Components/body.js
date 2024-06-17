import { useState, useEffect } from "react";
import resList from "../Utils/mockdata";
import RestaurantCard from "./Card";
import Shimmer from "./shimmer";

const Body = () => {
  const [ListofRest, setListofRes] = useState(resList);

  useEffect(() => {
    fetchData(); // Corrected: Call fetchData() with parentheses
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json); // Log the received JSON data to see its structure

      // Assuming the data structure is as you expect, set it to the state
      setListofRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (ListofRest.length === 0) {
    <div className="res-container">
      <Shimmer /> <Shimmer /> <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>;
  } else
    {return (
      <div className="body">
        <div className="searchBar">
          <input
            type="text"
            placeholder=" Search..."
            className="search"
          ></input>
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
    );}
};

export default Body;
