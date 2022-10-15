import * as React from "react";
import Rating from "../../Buttons/StarsRating/StarsRating";

export interface IReviewCardProps {
  imageSource: string;
  review: string;
  name: string;
  compagnyName: string;
  purchase: string;
  date: string;
}

export default function ReviewCard(props: IReviewCardProps) {
  const { imageSource, review, name, compagnyName, purchase, date } = props;
  return (
    <div className="review-card">
      <div className="review-card__profile-wrap">
        <div className="review-card__profile">
          <img className="review-card__profile-image" src={imageSource} />
        </div>
        <div className="review-card__person-info">
          <div className="review-card__person-name">{name}</div>
          <div className="review-card__compagny-name">{compagnyName}</div>
        </div>
      </div>
      <div className="review-card__review">{`"${review}"`}</div>
      <div className="review-card__purchase-wrap">
        <div className="review-card__purchase">{`Purchased ${purchase}`}</div>
      </div>
      <div className="review-card__date">{`- ${date}`}</div>
    </div>
  );
}
