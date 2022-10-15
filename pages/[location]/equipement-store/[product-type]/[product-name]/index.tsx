import React, { useEffect, useState } from "react";
import ProductCard from "../../../../../Components/Cards/product-card/product-card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../Store/redux/store";
import HeaderSection from "../../../../../Components/PageComponents/ProductName/HeaderSection/HeaderSection";
import ProductInfo from "../../../../../Components/PageComponents/ProductName/ProductInfo/ProductInfo";
import ProductQandA from "../../../../../Components/PageComponents/ProductName/ProductQandA/ProductQandA";
import ReviewSection from "../../../../../Components/PageComponents/ProductName/ReviewSection/ReviewSection";
import AddToCartSection from "../../../../../Components/Products/AddToCartSection/AddToCartSection";
import ProductImages from "../../../../../Components/Products/ProductImages/ProductImages";

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

  return (
    <div className="product-page">
      <div className="product-page__top-section">
        <div className="product-page__image-wrapper">
          {/* <ProductImages /> */}
          <Image
            src={"http://via.placeholder.com/150"}
            width={"500px"}
            height={"500px"}
            alt="product-image"
          />
        </div>
        <HeaderSection
          title="TEST PRODUCT"
          HsCode="HFTFSJDHR 4534"
          rating={5}
        />
        <AddToCartSection product={currentProduct} />
      </div>
      <ProductInfo
        title={"Testing product"}
        description={
          "Testing description this product is a very good product and we all like it alot it can be used as anything that is good for Testing description this product is a very good product and we all like it alot it can be used as anything that is good for Testing description this product is a very good product and we all like it alot it can be used as anything that is good for"
        }
      />
      <ReviewSection />
      <ProductQandA />
    </div>
  );
}
