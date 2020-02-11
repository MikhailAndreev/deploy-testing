import React, {useState, useEffect} from 'react';
import bookmarkImg from '../../../assets/images/bookmark.png';
import activeBookmarkImg from '../../../assets/images/bookmark-active.png';
import '../../../containers/FilterApp/FilterApp.scss';
import TagItem from "../TagItem";

const ListItem = (props) => {
    const [isBookmark, setToBookmark] = useState(false);
    const makeBookmark = () => {
        const isChecked = props.data.some(item => item.title === props.title);
        setToBookmark(isChecked);
        props.handleClick();
    };
    const renderTags  = props.tags.map((tag, index) => {
        const isTagChosen = props.dataTags && props.dataTags.includes(tag)
        return (
          <TagItem
            key={index}
            tag={tag}
            style={`${isTagChosen ? 'listItem__tagItem__active' : 'listItem__tagItem'}`}

          />
        )
    });
    useEffect(() => {
        const isChecked = props.data.some(item => item.title === props.title);
        setToBookmark(isChecked);
    });
    return (
        <div
            className={props.style}
        >
            <p onClick={props.onNavigate}>{props.title}</p>
            {renderTags}
            <img
                id={props.id}
                onClick={makeBookmark}
                className='bookmark-img'
                src={isBookmark ? activeBookmarkImg : bookmarkImg}
                alt=""/>
        </div>
    )
};

export default ListItem;