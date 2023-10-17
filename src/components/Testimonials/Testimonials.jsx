import "./Testimonials.css";
import Review from "../Review/Review";

const Testimonials = ({ reviews }) => {
  return (
    <section id="testimonials" className="wrapper">
      <div className="wrapper-inner">
        <div className="reviews-list">
          {reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
