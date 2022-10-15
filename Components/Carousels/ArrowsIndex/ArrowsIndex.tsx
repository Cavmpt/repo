import * as React from "react";

function ArrowLeft(props: any) {
  const { onClick, xAxis } = props;
  return (
    <div className="arrow-left1" onClick={onClick}>
      <div
        className="arrow-inside-wrap"
        // style={{
        //   transform: `translate(${xAxis}px, -50%)`,
        // }}
      >
        <span
          className="iconify"
          data-icon="majesticons:chevron-left-line"
          data-width="80"
          data-height="80"
        ></span>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  const { onClick, xAxis } = props;
  return (
    <div
      className="arrow-right1"
      // style={{
      //   transform: `translate(${xAxis}px, -50%)`,
      // }}
      onClick={onClick}
    >
      <div className="arrow-inside-wrap">
        <span
          className="iconify"
          data-icon="majesticons:chevron-right-line"
          data-width="80"
          data-height="80"
        ></span>
      </div>
    </div>
  );
}

export { ArrowLeft, ArrowRight };
