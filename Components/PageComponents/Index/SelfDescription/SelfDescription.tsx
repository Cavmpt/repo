import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies

export interface ISelfDescriptionProps {}

export default function SelfDescription(props: ISelfDescriptionProps) {
  return (
    <div className="self-description">
      <div className="self-description__name">Kevin Yan</div>
      <div className="self-description__job">Fullstack Developer</div>
      <div className="self-description__line" />
      <div className="self-description__location">Based in Montreal</div>
    </div>
  );
}
