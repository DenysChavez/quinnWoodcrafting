import { starGold } from "../../assets";
import './Review.css'

const Review = () => {
  return (
    <>
      <p className="testi-title">Title</p>
      <div className="stars">
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
        <img src={starGold} alt="" />
      </div>
      <p className="testi-review">Review</p>
    </>
  );
};

export default Review;
