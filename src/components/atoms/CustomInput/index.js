import React from 'react';

const CustomInput = (props) => (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={(e) => props.handleChange(e.target.value)}
      className={props.style}
    />

);

export default CustomInput;