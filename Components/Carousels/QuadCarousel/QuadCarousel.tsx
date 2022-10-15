import * as React from "react";
import Slider from "react-slick";
import Image from "next/image";
export interface IQuadCarouselProps {}

export default function QuadCarousel(props: IQuadCarouselProps) {
  /***
   * SLIDE ONE
   */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const firstSlideItems = [
    { url: "https://via.placeholder.com/300", alt: "first-image" },
    { url: "https://via.placeholder.com/300", alt: "second-image" },
    { url: "https://via.placeholder.com/300", alt: "first-image" },
  ];

  const getFirstSlideItems = () => {
    return firstSlideItems.map(item => {
      return (
        <Image layout="fill" key={item.alt} src={item.url} alt={item.alt} />
      );
    });
  };
  const FirstSlides = getFirstSlideItems();

  /***
   * SLIDE TWO
   */
  const secondSlideItems = [
    { url: "https://via.placeholder.com/300", alt: "first-image" },
    { url: "https://via.placeholder.com/300", alt: "second-image" },
    { url: "https://via.placeholder.com/300", alt: "first-image" },
  ];

  const getSecondSlideItems = () => {
    return firstSlideItems.map(item => {
      return (
        <Image key={item.alt} layout="fill" src={item.url} alt={item.alt} />
      );
    });
  };
  const SecondeSlides = getSecondSlideItems();
  return (
    <div className="quad-carousel">
      <div className="quad-carousel__left-section">
        <Slider {...settings}>{FirstSlides}</Slider>
      </div>
      <div className="quad-carousel__right-section">
        <div className="quad-carousel__second-slider">
          <Slider {...settings}>{SecondeSlides}</Slider>
        </div>
        <div className="quad-carousel__images">
          <div className="quad-carousel__third-image">
            <div className="third-image"></div>
          </div>
          <div className="quad-carousel__fourth-image">
            <div className="fourth-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
