import * as React from "react";

export interface IListTrendingCollectionsProps {}

export default function ListTrendingCollections(
  props: IListTrendingCollectionsProps,
) {
  const TrendingCollections = [
    "Patio",
    "Fences",
    "Saunas",
    "Patio",
    "Fences",
    "Saunas",
  ];
  const SingleCollectionButton = (TrendingProps: string[]) => (
    <button>{TrendingProps}</button>
  );

  return (
    <div>
      {TrendingCollections.map(collection => {
        // <SingleCollectionButton TrendingProps={TrendingCollections} />;
      })}
    </div>
  );
}
