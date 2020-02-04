import React from 'react';

const CustomButton = (props) => (
  <button
    onClick={props.handleClick}
    className={props.style}
  >
    {props.name}
  </button>
);

export default CustomButton;