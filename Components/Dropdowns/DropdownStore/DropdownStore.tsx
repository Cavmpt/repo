import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import categories from "./mockData";
import { useSelector } from "react-redux";

export interface IDropdowntoreProps {}

export default function Dropdowntore(props: IDropdowntoreProps) {
  const currentCategories = useSelector(
    (state: any) => state.productAndCategories.categories,
  );

  const [shownDropdownSection, setShownDropdownSection] = useState(
    categories[0],
  );
  const setDropdownSection = (shownDropdownCategory: any) => {
    setShownDropdownSection(shownDropdownCategory);
  };

  const ParseItems = function (key: any, value: any) {
    const router = useRouter();
    if (key === "subcategories") {
      return (
        <div
          // onMouseEnter={() => props.onMouseEnter()}
          // onMouseLeave={() => console.log("hitee")}
          className="dropdown-store__wrap"
        >
          {value.map((subcategory: any) => {
            return (
              <div
                className="dropdown-store__sub-categories-items-wrap"
                key={subcategory.subCategoriesTitle}
              >
                <div className="dropdown-store__sub-categories-title">
                  {subcategory.subCategoriesTitle}
                </div>
                <div className="dropdown-store__sub-categories-item">
                  {subcategory.subCatogoriesProducts.map((item: any) => {
                    return (
                      <div
                        onClick={() =>
                          router.push(
                            "/montreal/equipement-store/" +
                              subcategory.subCategoriesTitle +
                              "/" +
                              item,
                          )
                        }
                        className="dropdown-store__item"
                        key={item}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const router = useRouter();
  return (
    <div className="dropdown-store">
      <div className="dropdown-store__categories">
        {categories.map(item => {
          return (
            <div
              className="dropdown-store__store-categories"
              onMouseEnter={() =>
                setDropdownSection(categories[item.category_id - 1])
              }
              onClick={() => {
                router.push("/montreal/equipement-store/" + item.categories);
              }}
              key={item.categories}
            >
              <div className="dropdown-store__store-categories-text-wrap">
                {item.categories}
              </div>
              <div className="dropdown-store__arrow-wrap">
                <span
                  className="iconify"
                  data-icon="ep:arrow-right-bold"
                  data-inline="false"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="dropdown-store__sub-categories">
        {Object.entries(shownDropdownSection).map((item: any) => {
          const key = item[0];
          const value = item[1];
          if (key === "category_id") {
            return () => {};
          } else {
            return (
              <div className="dropdown-store__sub-categories-wrap" key={value}>
                {ParseItems(key, value)}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
