import * as React from "react";

export interface IStackProps {}

export default class Stack extends React.PureComponent<IStackProps> {
  public render() {
    return (
      <div className="stack-wrapper">
        <div className="stack-bar"></div>
      </div>
    );
  }
}
