import Image from "next/image";
import AddToCartButton from "../../Buttons/AddToCartButton/AddToCartButton";
import QuantityButton from "../../Buttons/QuantityButton/QuantityButton";

export interface IProductCardProps {
  name?: string;
  description?: string;
  variants?: any[];
  price?: number;
  backgroundImage?: string;
  onClick: () => void;
}

export default function ProductCard(props: IProductCardProps) {
  const { name, description, price, variants, backgroundImage } = props;
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div className="product-card" onClick={() => handleClick()}>
      {/* <Image src={backgroundImage} width={"300px"} height="200px" /> */}
      {/* <div className="product-card__image-placeholder" /> */}
      <div className="product-card__name-description-wrap">
        <div className="product-card__name">{name}</div>
        <div className="product-card__description">{description}</div>
        <div className="product-card__price">$ {price}.00</div>
        <QuantityButton />
        {/* <AddToCartButton /> */}
      </div>
    </div>
  );
}
