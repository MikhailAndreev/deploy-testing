import React, {useState, useEffect} from 'react';

import close from '../../../assets/images/close.png';
import './CloseIcon.scss'

const closeIcon = (props) => {

  return (
      <img
       onClick={props.clicked} 
       className='close-icon' 
       src={close}/>
  )
};

export default closeIcon;