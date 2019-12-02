import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import './dropdown.css'

const dropdownItem = [
  {
    name: "Item 1",
    id: "1"
  },
  {
    name: "Item 2",
    id: "2"
  },
  {
    name: "Item 3",
    id: "3"
  },
  {
    name: "Item 4",
    id: "4"
  }
];

const DropDown = props => {
  let dropdownRef = useRef(null);
  const [items] = useState(props.items || dropdownItem);
  const [showDropdown, setToggleDropdown] = useState(false);

  const useOutSideHandler = ref => {
    const handleOutSideClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleDropdown(false);
        return;
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleOutSideClick);
      return () => {
        document.removeEventListener("mousdown", handleOutSideClick);
      };
    });
  };

  useEffect(() => {
    // setItem(props.items)
  }, [props.items]);

  const toggleDropdown = e => {
    e.stopPropagation();
    setToggleDropdown(!showDropdown);
  };

  const onClickItem = (item) => {
    // props.callback(item)
  };

  useOutSideHandler(dropdownRef);
  return (
    <div className="dropdwon_wrapper" ref={dropdownRef}>
      <Button
        type="button"
        role="action"
        title=""
        className="dropdown_btn"
        onMouseDown={toggleDropdown}
        fullWidth
      >
        Select
      </Button>
      {showDropdown ? (
        <div className="dropdown_overlay">
          {items.map(data => (
            <div className="dropdown_label" key={data.id} onMouseDown={() => onClickItem(data)}>
              {data.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
