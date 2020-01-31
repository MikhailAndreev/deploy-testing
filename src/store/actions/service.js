import * as actionTypes from "./actionTypes";

export const filmsShow = (value) => {
    return {
        type: actionTypes.FILMS_LIST_SHOW,
        val: value
    };
};
