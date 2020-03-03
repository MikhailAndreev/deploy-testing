import * as staticData from '../../assets/static-data';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../utils/utility";

const initialState = {
  films: staticData.filmsList,
  updatedFilms: [],
  bookmarks: [],
  tags: staticData.tagsList,
  updatedTags: [],
  searchVal: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_FILMS_LIST:
      return updateObject(state, {
        updatedFilms: initialState.updatedFilms.concat(state.films),
        updatedTags: initialState.updatedTags,
        searchVal: initialState.searchVal
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
        searchVal: action.text,
      });

    case actionTypes.TAG_FILTER:
      const checkSame = state.updatedTags.includes(action.tag);
      console.log(checkSame)
      if (!checkSame) {
        const tagVal = state.updatedTags.concat(action.tag);
        const tagFiltered = state.films.filter(item => tagVal.every(tag => item.tags.some(t => t === tag)));
        const filterText = action.inpVal;
        const updSearchFiltered = tagFiltered.filter(item => item.title.toUpperCase().indexOf(filterText.toUpperCase()) !== -1);

        return updateObject(state, {
          ...state,
          updatedFilms: updSearchFiltered,
          updatedTags: tagVal,
        });
      }
      return updateObject(state, {
        ...state,
      });

    case actionTypes.TAG_DELETE:
      const sameTag = state.updatedTags.find(tag => tag === action.tag);
      const tagVal = state.updatedTags.concat(action.tag).filter(tag => tag !== sameTag);
      const tagFiltered = state.films.filter(item => tagVal.every(tag => item.tags.some(t => t === tag)));
      const filterText = action.inpVal;
      const updSearchFiltered = tagFiltered.filter(item => item.title.toUpperCase().indexOf(filterText.toUpperCase()) !== -1);

      return updateObject(state, {
        ...state,
        updatedFilms: updSearchFiltered,
        updatedTags: tagVal,
      });

  }
  return state
};

export default reducer;