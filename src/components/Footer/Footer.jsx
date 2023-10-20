import "./Footer.css";
import { logo_png, logo_svg, instagram, facebook, etsy } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="help-section">
          <h1>Help</h1>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">Track You Order</a></p>
          <p>Customer Reviews</p>
        </div>
        <div className="sitemap-section">
        <h1>Sitemap</h1>
          <p>FAQs</p>
          <p>Producs</p>
          <p>About Us</p>
          <p>Workshopss & Events</p>
          <p>Testimonioals & Reviews</p>
          <p>Customization & Personalization</p>
        </div>
        <div className="logo-section">
          <img className="logo-foot" src={logo_png} alt="" />
          <div className="social-media-icons">
            <img src={instagram} alt="instagram icon" />
            <img src={etsy} alt="etsy icon" />
            <img src={facebook} alt="facebook icon" />
          </div>
          <h3 className="email">email.com</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
