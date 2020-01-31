import React from 'react';

const CustomInput = (props) => (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.handleChange}
      className={props.style}
    />

);

export default CustomInput;