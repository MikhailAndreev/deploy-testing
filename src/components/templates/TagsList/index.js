import React from 'react';
import '../../../containers/FilterApp/FilterApp.scss';
import TagItem from "../../atoms/TagItem";
import WithClass from '../../../hoc/withClass';
import CloseIcon from '../../atoms/CloseIcon'

const tagSection = (props) => {
  const renderTags = props.tagsList.map((tag, index) => {
    const isTagClicked = props.updTags.includes(tag);
    return (
      <TagItem
        key={index}
        handleClick={() => props.tagClicked(tag)}
        tag={tag}
        style={'tag-menu__item'}
      />

    )
  });
  const renderListTag = props.updTags.map((tag, index) => {
    const isTagClicked = props.updTags.includes(tag);
    return (
      <TagItem
        key={index}
        handleClick={() => props.tagClicked(tag)}
        tag={tag}
        style='tagItem'
       /*  closeIcon={<CloseIcon clicked={() => props.tagClicked(tag)}/>} */
        closeIcon={true}
      />
    )
  });

  return (
    <WithClass classes='tagSection'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle btn-choose-tag" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Список тегов
        </button>
        <div className="dropdown-menu tag-menu" aria-labelledby="dropdownMenuButton">
          {renderTags}
        </div>
      </div>
      <WithClass classes='tagList'>
        {renderListTag}
      </WithClass>

    </WithClass>
  )
};

export default tagSection;