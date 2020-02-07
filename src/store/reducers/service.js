import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utility";

const initialState = {
  isTabFilms: true,
  isTabBookmarks: false,
};


// reducer is a function that retrieve state and action and then return state
const reducer = (state = initialState, action) => {
  switch(action.type) {

    case actionTypes.ACTIVE_TAB_FILMS:
      return updateObject(state, {
      isTabFilms: true,
      isTabBookmarks: false,
    });

    case actionTypes.ACTIVE_TAB_BOOKMARKS:
      return updateObject(state, {
        isTabFilms: false,
        isTabBookmarks: true,
      });
  }
  return state
};

export default reducer;