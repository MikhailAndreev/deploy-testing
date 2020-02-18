import React from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import ListItem from "../../molecules/ListItem";
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
      {props.bookmarks.length > 0 ?
        <WithClass classes='list'>
          {renderBookmarks}
        </WithClass>

        :
        <p>
          list is empty
        </p>

      }
    </WithClass>
  )
};

export default bookmarkList;
