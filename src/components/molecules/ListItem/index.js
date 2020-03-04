import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import bookmarkImg from '../../../assets/images/bookmark.png';
import activeBookmarkImg from '../../../assets/images/bookmark-active.png';
import './listItem.scss';
import TagItem from "../../atoms/TagItem";

const listItem = (props) => {
    const [isBookmark, setToBookmark] = useState(false);
    const makeBookmark = () => {
        const isChecked = props.data.some(item => item.title === props.title);
        setToBookmark(isChecked);
        props.handleClick();
    };

    useEffect(() => {
        const isChecked = props.data.some(item => item.title === props.title);
        setToBookmark(isChecked);
    });

    const renderTags = props.tags.map((tag, index) => {
        const isTagChosen = props.dataTags && props.dataTags.includes(tag)
        return (
            <TagItem
                key={index}
                tag={tag}
                style={`${isTagChosen ? 'listItem__tagItem__active' : 'listItem__tagItem'}`}

            />
        )
    });

    return (
        <div className='listItem'>
            <div className='listItem__anchor'>
                <NavLink className='listItem__link' exact to={`${'/film/'}${props.title}`}>{props.title}</NavLink>
                <div className='listItem__tags'>
                    {renderTags}
                </div>
            </div>

            <img
                onClick={makeBookmark}
                className='bookmark-img'
                src={isBookmark ? activeBookmarkImg : bookmarkImg}
                alt="" />
        </div>
    )
};


export default listItem;