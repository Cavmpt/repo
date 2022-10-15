import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 * REFERENCE: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */
function OutsideAlerter(
  ref: React.RefObject<any> | undefined,
  argumentFunction: (item: any) => void,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    // Object.entries(ref.current);
    function handleClickOutside(event: any) {
      if (ref === undefined) return;
      switch (ref.current.nodeType) {
        case 1:
          if (ref.current && !ref.current.contains(event.target)) {
            argumentFunction(event.target);
          }
          break;
        case undefined:
          let numberOfElementsWhichCursorIsNotWithinBoundary = 0;
          for (const [key] of Object.entries(ref.current)) {
            if (
              ref.current[key].current &&
              !ref.current[key].current.contains(event.target)
            ) {
              numberOfElementsWhichCursorIsNotWithinBoundary++;
              /**
               * If cursor is not within boundary of any of the ref'd elements, then call argumentFunction
               */
              if (
                numberOfElementsWhichCursorIsNotWithinBoundary ===
                Object.entries(ref.current).length
              ) {
                argumentFunction(event.target);
              }
            }
          }
          break;
        default:
          if (ref.current && !ref.current.contains(event.target)) {
            argumentFunction(event.target);
          }
      }
      /**
       * Checking through all the ref'd elements to see if element is within bounday
       */
    }
    const hoveredElement =
      typeof document !== "undefined" &&
      (document.querySelectorAll(":hover")[
        document.querySelectorAll(":hover").length - 1
      ] as any);
    // console.log("hoveredElement", hoveredElement);

    // handleClickOutside(hoveredElement);
    // Bind the event listener
    document.addEventListener("mouseover", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseover", handleClickOutside);
    };
  }, [ref, argumentFunction]);
}

export default OutsideAlerter;
