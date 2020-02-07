import * as actionTypes from "./actionTypes";
import { v4 } from 'node-uuid';

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

export const checkFilm = (film) => {
    return {
        type: actionTypes.CHECK_FILM,
        film
    };
};

export const searchFilter = (text) => {
    return {
        type: actionTypes.SEARCH_FILTER,
        text
    };
};

export const getFilmsList = () => {
    return {
        type: actionTypes.GET_FILMS_LIST,
    };
};
