import { starGold } from "../../assets";
import './Review.css'

const Review = ({ review }) => {
  return (
    <div className="review-block">
      <p className="product-name">{review.product_name}</p>
      <div className="stars-rate">
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
      </div>
      <p className="review-text">{review.review}fsdfasdfsdfsadf</p>
      <p className="review-info">{review.user_name} on { review.date}</p>
    </div>
  );
};

export default Review;
