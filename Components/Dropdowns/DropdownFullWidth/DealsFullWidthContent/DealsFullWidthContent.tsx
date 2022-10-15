import * as React from "react";

export interface IDealsFullWidthContentProps {}

const Frames = (props: any) => {
  const { image } = props;
  return (
    <div
      key={image}
      className="deal-frames"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default function DealsFullWidthContent(
  props: IDealsFullWidthContentProps,
) {
  const images = ["niegqergqer", "regrenugnoiqergiu", "iqebrgubeir"];
  return (
    <div className="deals-full-width">
      {images.map((item: string) => (
        <Frames image={item} key={item} />
      ))}
    </div>
  );
}
