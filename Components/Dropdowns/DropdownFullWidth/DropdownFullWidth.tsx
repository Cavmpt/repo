import React, { useEffect, useState, forwardRef } from "react";

export interface IDropdownFullWidthProps {
  Content: JSX.Element;
  isOpen: boolean;
  ref: any;
}

function DropdownFullWidth(props: IDropdownFullWidthProps, ref: any) {
  const { Content, isOpen } = props;
  // const { dropdownStoreState } = props;

  const [firstLoadFullWidthDropdown, setFirstLoadFullWidthDropdown] =
    useState<boolean>(true);

  useEffect(() => {
    if (firstLoadFullWidthDropdown === true && isOpen === true) {
      setFirstLoadFullWidthDropdown(false);
    }
  }, [firstLoadFullWidthDropdown, isOpen]);

  /**
   * resolves autoanimating dropdown as load
   * @returns "className for the dropdown component"
   */

  const dropdownFullWidthClassName = () => {
    if (firstLoadFullWidthDropdown === true) {
      return "simpy-hidden-full-width-dropdown";
    } else if (firstLoadFullWidthDropdown === false && isOpen === true) {
      return "dropdown-full-width";
    } else if (firstLoadFullWidthDropdown === false && isOpen === false) {
      return "animate-hide-full-width-dropdown";
    } else return "simpy-hidden-full-width-dropdown";
  };

  return (
    <div ref={ref} className={dropdownFullWidthClassName()}>
      {Content}
    </div>
  );
}

export default forwardRef(DropdownFullWidth);
