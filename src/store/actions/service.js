import * as actionTypes from "./actionTypes";

export const filmsShow = (value) => {
    return {
        type: actionTypes.FILMS_LIST_SHOW,
        val: value
    };
};

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

export const storeBookmarks = (film) => {
    return {
        type: actionTypes.ADD_TO_BOOKMARKS,
        film
    };
};

export const deleteBookmarks = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_BOOKMARKS,
        id: id
    };
};

export const checkFilm = (film) => {
    return {
        type: actionTypes.CHECK_FILM,
        film
    };
};
