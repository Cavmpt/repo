import * as React from "react";

export interface IRoundButtonProps {
  children: any;
  onClick: () => void;
}

export default function RoundButton(props: IRoundButtonProps) {
  const { children } = props;
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div className="round-button" onClick={() => handleClick()}>
      <div className="round-button__text-align-center-wrap">{children}</div>
    </div>
  );
}
