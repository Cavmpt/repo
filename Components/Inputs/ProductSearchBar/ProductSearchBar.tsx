import React, { useState } from "react";

export interface IProductSearchProps {
  setSearchStart: (value: boolean) => void;
}

/**
 * THE DROPDOWN IS IN THE MASTER COMPONENT
 */

export default function ProductSearch(props: IProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: any) => {
    const { value } = e.target;
    console.log(value);
    setSearchQuery(value);
  };

  const startSearch = (value: boolean) => {
    console.log("hittt");
    props.setSearchStart(value);
  };

  const onSearch = () => {
    console.log("handleSearch");
  };

  return (
    <div className="product-search">
      <input
        value={searchQuery}
        onFocus={() => {
          startSearch(true);
        }}
        onBlur={() => startSearch(false)}
        placeholder="What are you looking for ?"
        onChange={e => {
          startSearch(true);
          handleSearchChange(e);
        }}
      />
      <button className="product-search__button" onClick={() => onSearch()}>
        <span
          className="iconify"
          data-icon="majesticons:search-line"
          data-width="30"
          data-height="30"
        />
      </button>
    </div>
  );
}
