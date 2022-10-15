import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Link from "next/link";

export interface IListCategoriesProps {}

export default function ListCategories(props: IListCategoriesProps) {
  const [hoveredSlice, setHoveredSlice] = useState<string>("");
  const dispatch = useDispatch();

  const onHoverSlice = () => {};

  const onUnHoverSlice = () => {};
  const categoriesHolder = [
    "Fences",
    "workbench",
    "metal shelter",
    "snow plow",
    "horsing nigga",
    "mister V",
    "party tent",
    "sawhorse",
    "landing-slider",
    "travail a mon compte",
    "className",
  ];
  return (
    <div className="list-categories">
      {categoriesHolder.map(categories => {
        return (
          <div
            className="list-categories__single-categories"
            onMouseEnter={() => setHoveredSlice(categories)}
            onMouseLeave={() => setHoveredSlice("")}
            key={categories}
          >
            <div className="list-categories__name">{categories}</div>
            <div
              className={
                hoveredSlice === categories
                  ? "list-categories__onHoverEffect"
                  : "display-none"
              }
            >
              <div className="list-categories__shop-wrapper">
                <div className="list-categories__shop-now-text">shop now</div>
                <span
                  className="iconify"
                  data-icon="ep:arrow-right-bold"
                  data-inline="false"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
