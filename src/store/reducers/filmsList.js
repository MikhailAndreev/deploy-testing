import * as staticData from '../../assets/static-data';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utility";

// const initFilms = [].concat(staticData.filmsList.slice(0, 10));

const initialState = {
  films: staticData.filmsList.slice(0, 30),
  updatedFilms: [],
  bookmarks: [],
  filmsToShow: 10,
  step: 0,
  // step: 10,
  // isDisabled: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_FILMS_LIST:
      return updateObject(state, {
        // updatedFilms: state.updatedFilms.concat(state.films.slice(0, state.filmsToShow)),
        updatedFilms: initialState.updatedFilms.concat(state.films),
        isDisabled: false,
        step: 10
      });

    case actionTypes.FILMS_LIST_SHOW:
      return updateObject(state, {
        updatedFilms: state.updatedFilms.concat(state.films.slice(state.step, state.step + state.filmsToShow)),
        step: state.step + state.filmsToShow,
        isDisabled: state.step === (state.films.length - 10)
      });

    case actionTypes.CHECK_FILM:
      const newArray = state.updatedFilms.find(item => item.title === action.film);
      const newBookmarks = state.bookmarks.concat(newArray);
      const check = state.bookmarks.find(item => item.title === action.film)
      console.log('ID ', action.id)
      console.log('OBJECT ', newArray)
      if (check) {
        return updateObject(state, {
          bookmarks: state.bookmarks.filter(item => item.title !== action.film),
        });
      }
      return updateObject(state, {
        bookmarks: newBookmarks,
      });

    case actionTypes.SEARCH_FILTER:
      console.log(action.text);
      const newFilterList = state.films.filter(item => item.title.toUpperCase().indexOf(action.text.toUpperCase()) !== -1);
      if(action.text !== '') {
          return updateObject(state, {
              updatedFilms: newFilterList,
              isDisabled: true
          });
      }
      return updateObject(state, {
        updatedFilms: initialState.updatedFilms.concat(state.films),
      });


  }
  return state
};

export default reducer;