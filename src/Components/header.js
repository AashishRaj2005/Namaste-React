import { CDN_URL } from "../Utils/constants";
const Header = () => (
  <div className="header">
    <div className="logo_container">
      <img
        className="logo"
        src={CDN_URL}
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
  export default Header;