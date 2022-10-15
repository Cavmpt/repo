import React, { useState } from "react";

export interface IQuantityButtonProps {}

export default function QuantityButton(props: IQuantityButtonProps) {
  const [quantity, setQuantity] = useState(0);
  const setManualQuantity = (e: any) => {
    let invalidChars = ["-", "+", "e"];
    const manualQuantityInput = e.target.value;
    if (!manualQuantityInput.includes(invalidChars)) {
      setQuantity(Number(manualQuantityInput));
    }
  };
  const removeFromQuantity = () => {
    if (quantity > 0) {
      setQuantity(Number(quantity) - 1);
    }
  };
  const addToQuantity = () => {
    setQuantity(Number(quantity) + 1);
  };

  return (
    <div className="quantity-button">
      <button
        className="quantity-button__remove"
        onClick={() => {
          removeFromQuantity();
        }}
      >
        -
      </button>
      <input
        className="quantity-button__input"
        value={quantity}
        pattern="[0-9]"
        onChange={e => setManualQuantity(e)}
        type="number"
        min="0"
      />
      <button
        className="quantity-button__add"
        onClick={() => {
          addToQuantity();
        }}
      >
        +
      </button>
    </div>
  );
}
