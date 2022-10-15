import * as React from "react";

export interface IWeightsAndDimensionsTableProps {}

export default function WeightsAndDimensionsTable(
  props: IWeightsAndDimensionsTableProps,
) {
  const weightAndDimensions = [];
  return (
    <table className="weight-and-dimensions-table">
      {/* {weightAndDimensions.map(item => {
        return;
      })} */}
      <tr className="weight-and-dimensions-table__table-row">
        <td>Peter</td>
        <td>Griffin</td>
      </tr>
      <tr className="weight-and-dimensions-table-table-row">
        <td>Lois</td>
        <td>Griffin</td>
      </tr>
    </table>
  );
}
