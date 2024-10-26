import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starCount }) => {
  const [rating, setRating] = useState(null);
  const [hoverCount, setHoverCount] = useState(null);

  const handleMouseEnter = (getCurrentIndex) => {
    setHoverCount(getCurrentIndex);
    console.log(`hover Count: ${getCurrentIndex}`);
  };
  const handleMouseLeave = (getCurrentIndex) => {
    setHoverCount(rating);
    console.log(getCurrentIndex);
  };
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
    console.log(`rating is set to : ${rating}`);
  };
  return (
    <div className="flex gap-2 w-100% min-h-screen justify-center items-center">
      {[...Array(starCount)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            size={50}
            color={(hoverCount || rating) >= index ? "yellow" : "gray"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
