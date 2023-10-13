import "./Testimonials.css";
import Review from "../Review/Review";

const Testimonials = ({ reviews }) => {
  return (
    <section id="testimonials">
      <div className="reviews">
        {reviews.map(review => <Review review={review} key={review.id} />)}
      </div>
    </section>
  );
};

export default Testimonials;
