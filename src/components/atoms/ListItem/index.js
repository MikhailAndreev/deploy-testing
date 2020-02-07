import React, {useState, useEffect} from 'react';
import bookmarkImg from '../../../assets/images/bookmark.png';
import activeBookmarkImg from '../../../assets/images/bookmark-active.png';
import '../../../containers/FilterApp/FilterApp.scss';

const ListItem = (props) => {
    const [isBookmark, setToBookmark] = useState(false);
    const makeBookmark = () => {
        const isChecked = props.array.some(item => item.title === props.title);
        setToBookmark(isChecked);
        props.handleClick();
    };
    useEffect(() => {
        const isChecked = props.array.some(item => item.title === props.title);
        setToBookmark(isChecked);
    });
    return (
        <div
            className={props.style}
        >
            <p onClick={props.onNavigate}>{props.title}</p>
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