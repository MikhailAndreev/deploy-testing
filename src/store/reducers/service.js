import * as staticData from '../../assets/static-data';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utility";

const initFilms = [].concat(staticData.filmsList.slice(0, 10))

const initialState = {
  films: staticData.filmsList.slice(10, 40),
  updatedFilms: initFilms,
  bookmarks: [],
  bookmarksList: [],
  filmsToShow: 10,
  step: 0,
  counting: 1,
  clickNumber: 0,
  isDisabled: false,
  // currentTab: 1,
  isTabFilms: true,
  isTabBookmarks: false,
};


// reducer is a function that retrieve state and action and then return state
const reducer = (state = initialState, action) => {
  const newClickNumber = Math.ceil(state.films.length / state.filmsToShow);
  switch(action.type) {
    case actionTypes.FILMS_LIST_SHOW:
      return updateObject(state, {
        updatedFilms: state.updatedFilms.concat(state.films.slice(state.step, state.step + state.filmsToShow)),
        step: state.step + state.filmsToShow,
        counting: state.counting + 1,
        clickNumber: newClickNumber,
        isDisabled: state.clickNumber === state.counting
      });

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

    case actionTypes.ADD_TO_BOOKMARKS:
      const newArr = state.updatedFilms.find(item => item.title === action.film);
      const updatedBookmarks = state.bookmarks.concat(newArr);
      // console.log(action.resultFilm)
      console.log(newArr);
      return updateObject(state, {
        bookmarks: updatedBookmarks
      });

    case actionTypes.CHECK_FILM:
      const newArray = state.updatedFilms.find(item => item.title === action.film);
      const newBookmarks = state.bookmarks.concat(newArray);
      const check = state.bookmarks.find(item => item.title === action.film)
      if(check) {
      return updateObject(state, {
          bookmarks: state.bookmarks.filter(item => item.title !== action.film)
      });
      }
      return updateObject(state, {
        bookmarks: newBookmarks
      });
  }
  return state
};

export default reducer;