import * as React from "react";

export interface IBasicDropdownProps {
  // width: string;
  list: any[];
  isListOpen: boolean;
  onSelect: (item: any) => void;
}

export default function BasicDropdown(props: IBasicDropdownProps) {
  const { list, isListOpen } = props;
  const handleSelect = (selectedItem: any) => {
    props.onSelect(selectedItem);
  };
  // const style = {
  //   width,
  // };
  if (isListOpen) {
    return (
      <div className="basic-dropdown-list" /*style={style}*/>
        {list.map(item => {
          if (item.title) {
            const { title } = item;
            return <div className="list-title">{title}</div>;
          }
          return (
            <button
              className="list-item"
              onClick={() => {
                handleSelect(item.description);
              }}
              key={item.description}
            >
              {item.description}
            </button>
          );
        })}
      </div>
    );
  } else return null;
}
