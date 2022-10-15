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
    </div>
  );
}
