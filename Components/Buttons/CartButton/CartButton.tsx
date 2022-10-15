import * as React from "react";

export interface ICartButtonProps {
  items: number;
}

export default function CartButton(props: ICartButtonProps) {
  const { items } = props;
  return (
    <div className="cart-icon">
      {/* <div className="cart-icon__notifications">{items}</div> */}
      <span
        className="iconify"
        data-icon="majesticons:shopping-cart-line"
        data-width="30"
        data-height="30"
      />
    </div>
  );
}
