import * as React from "react";

export interface IInfoPageProps {}

export default function InfoPage(props: IInfoPageProps) {
  return (
    <div className="info-page">
      <div className="info-page__image"></div>
      <div className="info-page__text"></div>
    </div>
  );
}
