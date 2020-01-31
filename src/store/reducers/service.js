import * as staticData from '../../assets/static-data';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";


const initialState = {
  films: staticData.filmsList.slice(0, 30),
  updatedFilms: [],
  filmsToShow: 10,
  step: 0,
  counting: 1,
  isDisabled: false
};


// reducer is a function that retrieve state and action and then return state
const reducer = (state = initialState, action) => {
  const clickNumber = Math.ceil(state.films.length / state.filmsToShow);
  switch(action.type) {
    case actionTypes.FILMS_LIST_SHOW:
      return updateObject(state, {
        updatedFilms: state.updatedFilms.concat(state.films.slice(state.step, state.step + state.filmsToShow)),
        step: state.step + state.filmsToShow,
        counting: state.counting + 1,
        isDisabled: clickNumber === state.counting
      });
    case actionTypes.FILMS_LIST_END:
      return ;

  }
  return state
};

export default reducer;