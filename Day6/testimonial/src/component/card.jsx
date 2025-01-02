import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./card.css"
function Card({ reviews}) {
  return (
    <>
      <div className="parent">
        <div className="image">
          <img src={reviews.image} />
        </div>
        <div className="title">
          <p className="name">{reviews.name}</p>
          <p className="job">{reviews.job}</p>
        </div>
        <div className="quatation">
          <FaQuoteLeft />
        </div>
        <div className="text">
          <p>{reviews.text}</p>
        </div>
        <div className="quatation">
          <FaQuoteRight />
        </div>
        
      </div>
    </>
  );
}
export default Card;
