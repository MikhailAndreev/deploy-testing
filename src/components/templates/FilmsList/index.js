import React from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import ListItem from "../../atoms/ListItem";
import WithClass from '../../../hoc/withClass';
import CustomButton from "../../atoms/CustomButton";


const filmsList = (props) => {
  const renderFilms = props.filmsList.slice(0, props.itemsToShow).map((film, index) => {
    return (
      <ListItem
        handleClick={() => props.onCheckFilm(film.title)}
        key={index}
        style='listItem'
        imageStyle='bookmark-img'
        title={film.title}
        data={props.bookmarks}
        onNavigate={props.onNavigate}
        dataTags={props.updTags}
        tags={film.tags}
      >
        {film.title}
      </ListItem>
    )
  });
  return (
    <WithClass classes='list-films'>

      <WithClass classes='list'>
        {renderFilms}
      </WithClass>

      <CustomButton
        name={props.btnName}
        style={`${props.isActive ? 'btn-hide' : ''} ${'btn-tab'}`}
        handleClick={props.handleShowMore}
      />
    </WithClass>
  )
};

export default filmsList;