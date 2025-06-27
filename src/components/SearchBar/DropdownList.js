import React from "react";
import "./DropdownList.css";

const DropdownList = ({ airports, onSelect, visible }) => {
  if (!visible || airports.length === 0) return null;

  return (
    <ul className="dropdown-list">
      {airports.map((airport, index) => (
        <li
          key={index}
          className="dropdown-item"
          onMouseDown={() => onSelect(airport)}
        >
          {airport}
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
