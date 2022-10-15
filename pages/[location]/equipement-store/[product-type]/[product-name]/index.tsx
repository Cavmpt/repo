import React, { useEffect, useState } from "react";
import ProductCard from "../../../../../Components/Cards/product-card/product-card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Store/redux/store";

import Image from "next/image";

export interface IProductNameProps {}

export default function ProductName(props: IProductNameProps) {
  // const router = useRouter();
  // const [products, setProducts] = useState([]);
  // const { productType } = router.query;
  // const allCategoriesAndProducts = useSelector(
  //   (state: RootState) => state.products.categoriesAndProductsStore,
  // );

  const router = useRouter();
  const currentProductName = router.asPath.split("/")[4];
  const AllProducts = useSelector(
    (state: RootState) => state.products.productStore,
  );
  const currentProduct = AllProducts.forEach(item => {
    if (item.name === currentProductName) {
      return item;
    }
  });

  return <div className="product-page"></div>;
}
