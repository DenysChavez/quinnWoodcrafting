import "./Testimonials.css";
import Review from "../Review/Review";

const Testimonials = ({ reviews }) => {
  return (
    <section id="testimonials">
      <div className="reviews-list">
        <div className="reviews-grid-inner">
          {reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
