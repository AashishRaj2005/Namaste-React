import resList from "../Utils/mockdata";
import RestaurantCard from "./Card";
const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">
        <input type="text" placeholder=" Search..." className="search"></input>
      </div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
