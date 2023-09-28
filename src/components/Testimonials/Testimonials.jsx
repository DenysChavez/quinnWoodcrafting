import { testimonial_background, ellipse, starGold, lines } from "../../assets";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="wrapper">
        <div className="testi-image">
          <img className="picture" src={testimonial_background} alt="" />
          <img className="ellipse" src={ellipse} alt="" />
        </div>
        <ul className="list">
          <li>
            <p className="testi-title">Title</p>
            <div className="stars">
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
            </div>
            <p className="testi-review">Review</p>
          </li>
          <li>
            <p className="testi-title">Title</p>
            <div className="stars">
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
            </div>
            <p className="testi-review">Review</p>
          </li>
          <li>
            <p className="testi-title">Title</p>
            <div className="stars">
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
              <img src={starGold} alt="" />
            </div>
            <p className="testi-review">Review</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
