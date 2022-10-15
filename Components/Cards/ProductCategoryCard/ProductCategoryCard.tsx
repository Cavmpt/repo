import * as React from "react";
import Image from "next/image";

export interface IProductTypeCardProps {
  name: string;
  backgroundImage?: string;
  onClick: () => void;
}

export default function ProductTypeCard(props: IProductTypeCardProps) {
  const { name, backgroundImage } = props;
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div className="product-type-card">
      <Image
        src={"https://via.placeholder.com/150"}
        width="2rem"
        height="2rem"
        alt="product-type-card"
      />
      <div className="product-type-card__title">{name}</div>
    </div>
  );
}
