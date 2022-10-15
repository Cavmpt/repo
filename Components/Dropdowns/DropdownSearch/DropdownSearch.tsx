import * as React from "react";
import elasticlunr from "elasticlunr";

export interface IDropdownSearchProps {
  isOpen: boolean;
}

const suggestedKeywords = [
  "qregqregqregqreg",
  "qgergrqegreqgqreg",
  "qgrrqegqerg",
];

const suggestedArticles = [
  "qregqregqregqreg",
  "qgergrqegreqgqreg",
  "qgrrqegqerg",
];

const KeywordsHolder = () => {
  return (
    <div className="keywords-holder">
      <h1>keywords</h1>
      {suggestedKeywords.map(item => {
        return (
          <div key={item} className="suggested-keyword-slice">
            {item}
          </div>
        );
      })}
    </div>
  );
};

const ArticlesRecommender = () => {
  return (
    <div className="articles-holder">
      <h1>Knowledge center articles</h1>
      {suggestedArticles.map(item => {
        return (
          <div key={item} className="suggested-articles-slice">
            {item}
          </div>
        );
      })}
    </div>
  );
};

const ProductRecomender = () => {
  const recommendedProduct = ["erqgreqgreq", "qergreqgq"];
  const ProductSlice = (product: any) => {
    return <div className="product-slice">{product}</div>;
  };
  return (
    <div className="recommended-articles-holder">
      <h1>recommended products for keywords</h1>
      {recommendedProduct.map(item => {
        // return <ProductSlice key={item} product={item} />;
      })}
    </div>
  );
};

export default function DropdownSearch(props: IDropdownSearchProps) {
  // const productList = [];

  interface ElasticlunrType {
    title: string;
    body: string;
    id: number;
  }

  let index = elasticlunr<ElasticlunrType>(function () {
    this.addField("title");
    this.addField("body");
    this.setRef("id");
  });
  let doc1 = {
    id: 1,
    title: "Oracle released its latest database Oracle 12g",
    body: "Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year.",
  };

  let doc2 = {
    id: 2,
    title: "Oracle released its profit report of 2015",
    body: "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion.",
  };

  index.addDoc(doc1);
  index.addDoc(doc2);

  const { isOpen } = props;

  return (
    <div className={isOpen ? "dropdown-search" : "display-none"}>
      <div className="dropdown-search__inner-wrapper">
        <div>
          <KeywordsHolder />
          <ArticlesRecommender />
        </div>
        <ProductRecomender />
      </div>
    </div>
  );
}
