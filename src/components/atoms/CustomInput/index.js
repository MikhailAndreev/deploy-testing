import React from 'react';

const CustomInput = (props) => (

  <div className="input-group flex-nowrap">
    <input
      type="text"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="addon-wrapping"
      placeholder={props.placeholder}
      onChange={(e) => props.handleChange(e.target.value.trim())}
      className={`${'form-control'} ${props.style}`}
    />

    <div className="input-group-append">
      <span className="input-group-text" id="addon-wrapping"></span>
    </div>
  </div>


);

export default CustomInput;

{ /* <input
      type="text"
      placeholder={props.placeholder}
      onChange={(e) => props.handleChange(e.target.value.trim())}
      className={props.style}
    /> */ }
