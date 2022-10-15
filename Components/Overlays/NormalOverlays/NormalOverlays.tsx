import * as React from "react";

export interface INormalOverlaysProps {
  show: boolean;
}

export default function NormalOverlays(props: INormalOverlaysProps) {
  const { show } = props;
  return <div className={show ? "normal-overlay" : "no-overlay"} />;
}
