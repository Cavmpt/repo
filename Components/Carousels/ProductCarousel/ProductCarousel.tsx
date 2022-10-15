import * as React from "react";
import Image from "next/image";
import Slider from "react-slick";

export interface IProductCarouselProps {
  currentProduct: any[];
}

export default function ProductCarousel(props: IProductCarouselProps) {
  const { currentProduct } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const getProductImages = () => {
    return currentProduct.map(item => {
      return (
        <Image layout="fill" key={item.alt} src={item.url} alt={item.alt} />
      );
    });
  };

  const productImages = getProductImages();

  return (
    <div className="product-carousel">
      <Slider {...settings}>{productImages}</Slider>
    </div>
  );
}
