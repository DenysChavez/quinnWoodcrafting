import "./Navbar.css";
import { logo_png, search, nav_icon } from "../../assets";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
      <div className="nav-list-icon">
          <img src={nav_icon} alt="" />
        </div>
        <img className="logo" src={logo_png} alt="Logo" />
        <ul className="nav-list">
          <li className="colorWhite">
            <a href="#">About Us</a>
          </li>
          <li className="colorGold">
            <a href="#">Products</a>
          </li>
          <li className="colorWhite">
            <a href="#">Events</a>
          </li>
          <li className="colorGold">
            <a href="#">FAQs</a>
          </li>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="Search for products"
            className="search-input"
          />
          <button className="search-button">
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
