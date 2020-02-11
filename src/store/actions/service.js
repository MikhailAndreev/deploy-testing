import * as actionTypes from "./actionTypes";

export const activeTabFilms = (value) => {
    return {
        type: actionTypes.ACTIVE_TAB_FILMS,
        val: value
    };
};

export const activeTabBookmarks = (value) => {
    return {
        type: actionTypes.ACTIVE_TAB_BOOKMARKS,
    };
};


