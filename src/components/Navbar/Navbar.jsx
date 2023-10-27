import "./Navbar.css";
import { logo_png} from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ isOpen }) => {
  return (
    <>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
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
        <div className="wrapper-inner navbar">
          <div className="nav-menu" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="/" className="logo"> <img className="logo" src={logo_png} alt="Logo" /></Link>
          <NavLinks isOpen={isOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
