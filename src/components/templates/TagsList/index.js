import React from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import TagItem from "../../atoms/TagItem";
import WithClass from '../../../hoc/withClass';

const tagsList = (props) => {
  const renderTags = props.tagsList.map((tag, index) => {
    const isTagClicked = props.updTags.includes(tag);
    return (
      <TagItem
        key={index}
        handleClick={() => props.tagClicked(tag)}
        tag={tag}
        style={`${isTagClicked ? 'tagItem__active' : 'tagItem'}`}
      />

    )
  });
  return <WithClass classes='tagsList'>{renderTags}</WithClass>
};

export default tagsList;