import * as React from "react";

export interface IServicesProps {}

export default function Services(props: IServicesProps) {
  const servicesOffered = [
    { title: "Container", image: "image for services" },
    { title: "Container", image: "image for services" },
    { title: "Container", image: "image for services" },
    { title: "Container", image: "image for services" },
  ];
  const ServiceCard = (serviceProps: any) => {
    const { image } = serviceProps;
    return <div className="services-card"></div>;
  };
  return (
    <div className="services-offered">
      <h1 className="services-offered__title">Services we offer in Montreal</h1>
      {/* <div className='services-offered__annoucee'>

      </div> */}
      <div className="services-offered__services-wrap">
       
      </div>
    </div>
  );
}

//https://www.youtube.com/watch?v=1MfDj88FcwU
