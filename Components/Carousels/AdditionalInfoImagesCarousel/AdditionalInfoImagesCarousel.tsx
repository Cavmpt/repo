import * as React from "react";
import Image from "next/image";

export interface IAdditionalInfoImagesCarouselProps {}

export default function AdditionalInfoImagesCarousel(
  props: IAdditionalInfoImagesCarouselProps,
) {
  return (
    <div>
      <Image
        src="http://via.placeholder.com/150"
        height={"400px"}
        width={"400px"}
        alt="testing for now"
      />
    </div>
  );
}
