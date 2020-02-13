import React, {useState, useEffect} from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import WithClass from "../../../hoc/withClass";
import CustomInput from "../../atoms/CustomInput";
import CustomButton from "../../atoms/CustomButton";

const tabs = (props) => {

  return (
    <WithClass classes='tabs'>

        <CustomButton
          name='фильмы'
          style={props.styleTabFilms}
          handleClick={props.onFilmClick}
        />

        <CustomButton
          name='закладки'
          style={props.styleTabBookmark}
          handleClick={props.onBookmarkClick}
        />
    </WithClass>
  )
};

export default tabs;