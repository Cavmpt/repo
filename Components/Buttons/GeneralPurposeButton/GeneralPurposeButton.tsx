import * as React from "react";

export interface IGeneralPurposeButtonProps {
  children: any;
  onClick: () => void;
}

export default function GeneralPurposeButton(
  props: IGeneralPurposeButtonProps,
) {
  const { children } = props;

  return (
    <button className="" onClick={() => props.onClick()}>
      {children}
    </button>
  );
}
