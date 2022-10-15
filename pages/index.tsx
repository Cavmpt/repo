import React, { Suspense } from "react";

import { GetStaticPropsContext } from "next";
// import AnimatedSection from "../Components/PageComponents/Index/AnimatedSection";
import SelfDescription from "../Components/PageComponents/Index/SelfDescription/SelfDescription";
import AnimatedSection from "../Components/PageComponents/Index/AnimatedSection/AnimatedSection";
import dynamic from "next/dynamic";

export default function Index(props: any) {
  return (
    <div className="personnal-website-frontend">
      <SelfDescription />
      <AnimatedSection />
    </div>
  );
}

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   // const dispatch = useDispatch();
//   fetch("http://backend:4000/products").then(products => {
//     console.log("product", products);
//     // dispatch(products);
//   });
//   return {
//     props: {
//       messages: require(`../Locales/${locale}.json`),
//     },
//   };
// }
