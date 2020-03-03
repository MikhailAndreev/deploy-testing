import React, { useState, useEffect } from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import CloseIcon from '../../atoms/CloseIcon';

const tagItem = (props) => {

  return (
    <> 
    {props.closeIcon && 
      <div
      className={props.style}
    >
      {props.tag}
      <div >
      <CloseIcon clicked={props.handleClick}/>
      </div>
    </div>
    }

    {!props.closeIcon &&
      <div
      className={props.style}
      onClick={props.handleClick}
    >
      {props.tag}
      
    </div>
    }
    </>
    
    
  )
};

export default tagItem;