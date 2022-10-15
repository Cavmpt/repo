import * as React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/redux/store";

export interface IEquipementStoreProps {}

export default function EquipementStore(props: IEquipementStoreProps) {
  const router = useRouter();
  const { location } = router.query;
  console.log("gang", location);
  const products = useSelector(
    (state: RootState) => state.products.productStore,
  );
  const collection = useSelector(
    (state: RootState) => state.products.categoryStore,
  );

  const blogs = [
    {
      backgroundImage: "https://via.placeholder.com/150",
      buttonText: "checkout these new products",
    },
    {
      backgroundImage: "https://via.placeholder.com/150",
      buttonText: "checkout these new products",
    },
    {
      backgroundImage: "https://via.placeholder.com/150",
      buttonText: "checkout these new products",
    },
  ];

  let blogData = { blogs: blogs, blogType: "normal" };

  const FeaturedProducts = [
    {
      FeaturedImageUrl: "https://via.placeholder.com/150",
      title: "HEPA FIL1TERS",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
    {
      FeaturedImageUrl: "https://via.placeholder.com/150",
      title: "HEPA FIL3TERS",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
    {
      FeaturedImageUrl: "https://via.placeholder.com/150",
      title: "HEPA FILTE4RS",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
    {
      FeaturedImageUrl: "https://via.placeholder.com/150",
      title: "HEPA FILTE6RS",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
  ];

  const productCategoryCard = [
    {
      productImageUrl: "https://via.placeholder.com/150",
      title: "HEPA F1ILTERS",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
    {
      productImageUrl: "https://via.placeholder.com/150",
      title: "HEPA FILTERS1",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
    {
      productImageUrl: "https://via.placeholder.com/150",
      title: "1HEPA FILTERS",
      description:
        "Help restore indoor air quality by blocking the flow of harmful organisms",
    },
  ];

  return (
    <div className="category-page">
      <section className="category-page__left-nav"></section>
      <section className="category-page__middle-block">
        <div className="category-page__featured-section">
          <h1 className="category-page__featured-title">Featured Section</h1>
          <div className="category-page__featured-images">
            {FeaturedProducts.map(featuredProduct => {
              const { FeaturedImageUrl, title, description } = featuredProduct;
              return (
              <div/>
              );
            })}
          </div>
        </div>
        <div className="category-page__category-page">
          <h1 className="category-page__featured-title">Featured Categories</h1>
          <div className="category-page__product-categories">
          
          </div>
        </div>
        <div className="category-page__product-section">
          <div className="category-page__product-title-wrapper">
            <h1 className="category-page__product-title">
              More Top SellingTransformers & UPS
            </h1>
          </div>
        </div>
      </section>
      <section className="category-page__right-nav"></section>
    </div>
  );
}
