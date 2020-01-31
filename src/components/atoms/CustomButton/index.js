import React from 'react';

const CustomButton = (props) => (
  <button
    type="text"
    onClick={props.handleClick}
    className={props.style}
  >
    {props.name}
  </button>
);

export default CustomButton;