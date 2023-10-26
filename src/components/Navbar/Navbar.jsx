import "./Navbar.css";
import { logo_png, nav_icon } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className="nav-list">
        <li className="colorWhite">
          <Link to="/about">About Us</Link>
        </li>
        <li className="colorGold">
          <Link to="/products">Products</Link>
        </li>
        <li className="colorWhite">
          <Link to="/events">Events</Link>
        </li>
        <li className="colorGold">
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="wrapper">
        <div className={`wrapper-inner navbar ${isOpen ? "open" : ""}`}>
          <div className="nav-list-icon">
            <img src={nav_icon} alt="" onClick={toggleNavbar} />
          </div>
          <Link to="/" className="logo"> <img className="logo" src={logo_png} alt="Logo" /></Link>
          
          {isOpen && <NavLinks />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
