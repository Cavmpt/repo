import React, { useEffect } from "react";

function useCheckIfHoveredByCursor(ref: React.RefObject<any>): boolean {
  let isHovered = false;
  useEffect(() => {
    function isItemHovered(event: any) {
      if (ref.current && ref.current.contains(event.target)) {
        isHovered = true;
      }
    }
    // Bind the event listener
    document.addEventListener("mousemove", isItemHovered);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousemove", isItemHovered);
    };
  }, [ref]);
  return isHovered;
}

export default useCheckIfHoveredByCursor;
