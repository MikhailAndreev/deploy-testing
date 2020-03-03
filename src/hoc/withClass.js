import React from 'react';

const withClass = (props) => {
  return (
    <>
      {props.wrapperStyle &&
        <div className={props.wrapperStyle}>
          <div className={props.classes}>
            {props.children}
          </div>
        </div>
      }

      {!props.wrapperStyle &&
          <div className={props.classes}>
            {props.children}
          </div>
      }

    </>
  )
};

export default withClass;