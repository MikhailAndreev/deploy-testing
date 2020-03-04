import React from 'react';

const InputSearch = (props) => (

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

    <div className={`${"input-group-append "}`}>
      <span className={`${"input-group-text "}${props.searchIconStyle}`} id="addon-wrapping"></span>
    </div>
  </div>

);

export default InputSearch;
