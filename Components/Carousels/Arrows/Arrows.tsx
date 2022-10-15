import * as React from "react";

function ArrowLeft(props: any) {
  const { onClick, xAxis } = props;
  return (
    <div className="arrow-left" onClick={onClick}>
      <div
        className="arrow-inside-wrap"
        // style={{
        //   transform: `translate(${xAxis}px, -50%)`,
        // }}
      >
        <span
          className="iconify"
          data-icon="majesticons:chevron-left-line"
          data-width="40"
          data-height="40"
        ></span>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  const { onClick, xAxis } = props;
  return (
    <div
      className="arrow-right"
      // style={{
      //   transform: `translate(${xAxis}px, -50%)`,
      // }}
      onClick={onClick}
    >
      <div className="arrow-inside-wrap">
        <span
          className="iconify"
          data-icon="majesticons:chevron-right-line"
          data-width="40"
          data-height="40"
        ></span>
      </div>
    </div>
  );
}

export { ArrowLeft, ArrowRight };
