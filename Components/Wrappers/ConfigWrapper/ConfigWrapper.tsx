import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setProductsAndCategories } from "../../../Store/redux/slices/ProductsAndCategoriesStore";
import { setLocation } from "../../../Store/redux/slices/locationSlice";

export interface IConfigWrapperProps {
  children: React.ReactNode;
}

export default function ConfigWrapper(props: IConfigWrapperProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  // get the location of the person from the nearest location of the stores that we have add it to the url. the default location should be toronto
  // parse the location from the url and fetch the products from the location from the dynamodb database
  // on location change we should fetch the products again from the dynamodb database

  useEffect(() => {
    /**
     * Location
     */
    // fetch("http://localhost:4000/products/get-all-products-and-catgories", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     LocationId: 1,
    //   }),
    // }).then(response => {
    //   if (response.status !== 200) {
    //     response.json().then(errorMessage => {
    //       /**
    //        * SET EROOR BANNER
    //        */
    //     });
    //   } else if (response.status === 200) {
    //     response.json().then(resultArray => {
    //       console.log("resultArray", resultArray);
    //       dispatch(setProductsAndCategories(resultArray));
    //     });
    //   }
    // });
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     currentLocation => {
    //       console.log("currentLocation", currentLocation);
    //       setLocation("Montreal");
    //       const currentLocationHarcoded = "Montreal";
    //       const currentIdHarcoded = "1";
    //       const locationReference = [{ name: "Montreal", id: "1" }];
    //       // const locationId =
    //       locationReference.map(location => {
    //         if (location.name === currentLocationHarcoded) {
    //           setLocation(location.id);
    //         }
    //       });
    //       /**
    //        * INITAL FETCH OF PRODUCTS AND CATEGORIES
    //        */
    //     },
    //     error => {
    //       console.log("error", error);
    //     },
    //     { timeout: 1000 },
    //   );
    //   // dispatch(setLocation(window.location));
    // } else if (false) {
    //   // function ipLookUp () {
    //   //   $.ajax('http://ip-api.com/json')
    //   //   .then(
    //   //       function success(response) {
    //   //           console.log('User\'s Location Data is ', response);
    //   //           console.log('User\'s Country', response.country);
    //   // }
    // } else if (router.pathname.split("/")[1] !== "") {
    //   dispatch(setLocation(router.pathname.split("/")[1]));
    // }
    /**
     * CHECK THE HISTORY
     */
  }, []);

  const { children } = props;
  return <>{children}</>;
}
