import React, { useState, useEffect } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const stars: any[] = [];
  useEffect(() => {
    for (var i = 0; i < 5; i++) {
      let klass = "star-rating__star";

      if (rating >= i && rating != null) {
        klass += " is-selected";
      }

      stars.push(
        <label
          className={klass}
          onClick={rate.bind(this, i)}
          onMouseOver={hoverOverRate.bind(this, i)}
          onMouseOut={starOut}
        >
          ★
        </label>,
      );
    }
  }, []);

  const rate = (selectedRating: number) => {
    setRating(selectedRating);
    setTempRating(selectedRating);
  };
  const hoverOverRate = (overedRating: number) => {
    setTempRating(overedRating);
  };
  const starOut = () => {
    setRating(tempRating);
  };

  return <div className="stars-rating">{stars}</div>;
};

export default Rating;
