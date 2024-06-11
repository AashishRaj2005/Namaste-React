import { IMG_LINK } from "../Utils/constants";
import resList from "../Utils/mockdata";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } =
    resData?.info;

  return (
    <div className="Card">
      <div className="CardImage">
        <img
          className="Food_img"
          src={IMG_LINK + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="CardText">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
