import React, { useState } from "react";
import Image from "next/image";
import ServiceMock from "./ServicesMock";

export interface IServicesFullWidthContentProps {}

export default function ServicesFullWidthContent(
  props: IServicesFullWidthContentProps,
) {
  const [currentViewedServiceOfferings, setCurrentViewedServiceOfferings] =
    useState<String>();

  const [shownFullWidthContent, setShownFullWidthContent] = useState<string>(
    "Diggin And Concrete Work",
  );

  const ContainerOne = () => {
    return (
      <div className="layout-grid-one">
        <div className="image-example-1" />
        <div className="image-example-2" />
        <div className="image-example-3" />
        <div className="image-example-4" />
        <div className="image-example-5" />
      </div>
    );
  };

  const ProductShowingContainer = () => {
    switch (shownFullWidthContent) {
      case "Diggin And Concrete Work":
        return <ContainerOne />;
      // case "Diggin And Concrete Work":
      //   return <ContainerOne />;
      default:
        return <ContainerOne />;
    }
    // return <ContainerOne />;
  };

  return (
    <div className="service-full-width-content">
      <div className="service-full-width-content__categories-wrapper">
        {ServiceMock.map(item => {
          return (
            <div
              key={item.service}
              className="service-full-width-content__categories-slice"
              onMouseEnter={() => setShownFullWidthContent(item.service)}
            >
              <div className="service-full-width-content">{item.service}</div>
              <div className="service-full-width-content__arrow-wrap">
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
      <div className="services-full-width-content__category-display">
        <ProductShowingContainer />
      </div>
    </div>
  );
}
