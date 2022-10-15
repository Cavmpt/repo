import * as React from "react";

export interface IProductInCartProps {
  product: any;
}

export default function ProductInCart(props: IProductInCartProps) {
  const { product } = props;
  const { title, description, quantity, price } = product;
  return (
    <div className="product-in-cart">
      <div className="product-in-cart__image" />
      <div className="product-in-cart__description">
        <div className="product-in-cart__title">{title}</div>
        <div className="product-in-cart__description">{description}</div>
        <div className="product-in-cart__quantity-price-wrap">
          <div className="product-in-cart__quantity">{quantity}</div>
          <div className="product-in-cart__price">{price}</div>
        </div>
      </div>
    </div>
  );
}
