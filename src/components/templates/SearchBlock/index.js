import React, {useState, useEffect} from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import WithClass from "../../../hoc/withClass";
import CustomInput from "../../atoms/CustomInput";

const searchBlock = (props) => {

  return (
    <WithClass classes='search-block'>
      <CustomInput
        style={props.style}
        searchIconStyle={props.iconStyle}
        placeholder={props.placeholder}
        handleChange={props.handleChange}
      />
    </WithClass>
  )
};

export default searchBlock;