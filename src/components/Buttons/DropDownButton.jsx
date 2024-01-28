import React, { useState } from 'react';
import './DropDownButton.css';
const DropdownButton = ({items}) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="dropdown me-4">
      <button className='btn dropdown-toggle dropBtn' type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
         <span className='btn-name'> {selectedItem}</span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">
        {items.map((item) => (
          <li key={item} onClick={() => selectItem(item)} style={{ cursor: "pointer" }}>
            <div className="dropdown-item">
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
