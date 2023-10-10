import { testimonial_background, ellipse } from "../../assets";
import "./Testimonials.css";
import Review from "../Review/Review";

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
            <Review />
          </li>
          <li>
            <Review />
          </li>
          <li>
            <Review />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
