import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../Store/redux/slices/cartSlice";

export interface IAddToCartButtonProps {
  product: any;
}

export default function AddToCartButton(props: IAddToCartButtonProps) {
  const dispatch = useDispatch();
  const { product } = props;

  const addProduct = () => {
    dispatch(addToCart(product));
  };

  return (
    <button onClick={() => addProduct()} className="add-to-card-button">
      Add to Card
    </button>
  );
}
