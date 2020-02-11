import * as staticData from '../../assets/static-data';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../utils/utility";

const initialState = {
  films: staticData.filmsList.slice(0, 30),
  updatedFilms: [],
  bookmarks: [],
  tags: staticData.tagsList,
  updatedTags: [],
  filteredVal: {
    inpVal: '',
    tagFilter: []
  },
  filter: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_FILMS_LIST:
      return updateObject(state, {
        updatedFilms: initialState.updatedFilms.concat(state.films),
        updatedTags: initialState.updatedTags,
        filteredVal: initialState.filteredVal
      });

    case actionTypes.CHECK_FILM:
      const newArray = state.updatedFilms.find(item => item.title === action.film);
      const newBookmarks = state.bookmarks.concat(newArray);
      const check = state.bookmarks.find(item => item.title === action.film)
      if (check) {
        return updateObject(state, {
          bookmarks: state.bookmarks.filter(item => item.title !== action.film),
        });
      }
      return updateObject(state, {
        bookmarks: newBookmarks,
      });

    case actionTypes.SEARCH_FILTER:
      const inpVal = action.text;
      const searchFiltered = state.films.filter(item => item.title.toUpperCase().indexOf(inpVal.toUpperCase()) !== -1);
      const updFiltered = searchFiltered.filter(item => state.updatedTags.every(tag => item.tags.some(t => t === tag)));

      return updateObject(state, {
        ...state,
        updatedFilms: updFiltered,
        // updatedFilms: searchFiltered,
        filteredVal: {
          ...state.filteredVal,
          inpVal: action.text
        },
      });

    case actionTypes.TAG_FILTER:
      const checkSame = state.updatedTags.find(tag => tag === action.tag);
      const tagVal = state.updatedTags.concat(action.tag).filter(tag => tag !== checkSame);
      const tagFiltered = state.films.filter(item => tagVal.every(tag => item.tags.some(t => t === tag)));
      const filterText = action.inpVal;
      const updSearchFiltered = tagFiltered.filter(item => item.title.toUpperCase().indexOf(filterText.toUpperCase()) !== -1);
      console.log('Is tag duplicate ?', checkSame);
      console.log('array of tags', state.updatedTags);

      return updateObject(state, {
        ...state,
        updatedFilms: updSearchFiltered,
        updatedTags: tagVal,
        filteredVal: {
          ...state.filteredVal,
          tagFilter: tagVal
        },
      });
  }
  return state
};

export default reducer;