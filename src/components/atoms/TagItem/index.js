import React, {useState, useEffect} from 'react';
import '../../../containers/FilterApp/FilterApp.scss';

const tagItem = (props) => {

  return (
    <div
      className={props.style}
      onClick={props.handleClick}
    >
      {props.tag}
    </div>
  )
};

export default tagItem;