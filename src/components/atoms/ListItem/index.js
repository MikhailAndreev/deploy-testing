import React from 'react';

const ListItem = (props) => (
    <li
        onClick={props.handleClick}
        className={props.style}
    >
        {props.children}
    </li>
);

export default ListItem;