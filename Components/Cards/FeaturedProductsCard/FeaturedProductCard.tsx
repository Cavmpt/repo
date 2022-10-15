import * as React from "react";
import Image from "next/image";

export interface IFeaturedProductCardProps {
  FeaturedImageUrl: string;
  title: string;
  description: string;
}

export default function FeaturedProductCard(props: IFeaturedProductCardProps) {
  const { FeaturedImageUrl, title, description } = props;
  return (
    <div className="featured-product-card">
      <div className="featured-product-card__image">
        <Image
          src={"http://via.placeholder.com/150x150"}
          width={"300px"}
          height={"320px"}
          alt="feature-product"
        />
      </div>
      <div className="featured-product-card__title-description-wrap">
        <h1 className="featured-product-card__title">{title}</h1>
        <div className="featured-product__description">{description}</div>
      </div>
    </div>
  );
}
