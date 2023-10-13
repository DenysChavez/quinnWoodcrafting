import "./Footer.css"
import { logo_png, logo_svg, instagram, facebook, etsy,  } from "../../assets";


const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="help-section">
          <h1>Help</h1>
          <p>Contact Us</p>
          <p>Track You Order</p>
          <p>Customer Reviews</p>
        </div>
        <div className="sitemap-section">
          <h1>Sitemap</h1>
          <p>About Us</p>
          <p>Producs</p>
          <p>Customization & Personalization</p>
          <p>FAQs</p>
          <p>Testimonioals & Reviews</p>
          <p>Workshopss & Events</p>
        </div>
        <div className="logo-section">
          <img className="logo-foot" src={logo_png} alt="" />
          <div className="social-media-icons">
            <img src={instagram} alt="instagram icon" />
            <img src={etsy} alt="etsy icon"/>
            <img src={facebook} alt="facebook icon"/>
          </div>
          <h3 className="email">email.com</h3>
        </div>
      </footer>
    </div>
  )
}

export default Footer