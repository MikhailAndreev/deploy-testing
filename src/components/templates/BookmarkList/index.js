import React from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import ListItem from "../../atoms/ListItem";
import WithClass from '../../../hoc/withClass';

const bookmarkList = (props) => {
  const renderBookmarks = props.bookmarks.map((film, index) => {
    return (
      <ListItem
        handleClick={() => props.onCheckFilm(film.title)}
        key={index}
        style='listItem'
        imageStyle='bookmark-img'
        title={film.title}
        data={props.bookmarks}
        onNavigate={props.onNavigate}
        tags={film.tags}
      >
        {film.title}
      </ListItem>
    )
  });
  return (
    <WithClass classes='list-films'>
      <WithClass classes='list'>
        {renderBookmarks}
      </WithClass>
    </WithClass>
  )
};

export default bookmarkList;
