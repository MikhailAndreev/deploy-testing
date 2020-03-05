import React, { Component } from 'react';
import { connect } from 'react-redux';


import './FilterApp.scss';
import * as actionCreators from '../../store/actions/index'
import axios from '../../utils/axios-data';
import * as staticData from '../../assets/static-data';
import WithClass from '../../hoc/withClass';
import SearchBlock from '../../components/templates/SearchBlock';
import TagSection from '../../components/templates/TagsList';
import Tabs from '../../components/templates/Tabs';
import FilmsList from '../../components/templates/FilmsList';
import BookmarkList from '../../components/templates/BookmarkList';


class FilterApp extends Component {
  state = {
    count: 15,
    filmTitle: '',
    tagsList: [],
  };

  componentDidMount() {
    this.props.onGetFilmsList();
    this.setState({
      tagsList: staticData.tagsList
    });
  }

  showMoreFilm = () => {
    this.setState({
      count: this.state.count + 15
    })
  };

  onNavigate = () => {
    this.props.history.push('/film')
  };

  render() {
    const { updatedFilms, films, bookmarks, updatedTags, searchVal } = this.props.flm;
    const isTagsEmpty = updatedTags.length < 1;
    const isInputEmpty = searchVal === '';
    const itemsToShow = isTagsEmpty && isInputEmpty ? this.state.count : updatedFilms.length;
    const isActiveBtn = Math.ceil(films.length / this.state.count) === 1 || !(isInputEmpty && isTagsEmpty);

    return (
      <WithClass
        wrapperStyle='filter-wrapper'
        classes='filter-section'>

        <SearchBlock
          style='input-search'
          iconStyle='search-icon'
          placeholder='поиск...'
          handleChange={this.props.onSearchFilter}
        />

        <TagSection
          updTags={updatedTags}
          tagsList={this.state.tagsList}
          tagClicked={this.props.onTagFilter}
          deleteTag={this.props.onDeleteTag}
        />

        <Tabs
          nameTab1='фильмы'
          nameTab2='закладки'
          styleTabFilms={`${this.props.srv.isTabFilms ? 'btn-tab btn-tab__active' : 'btn-tab'}`}
          styleTabBookmark={`${this.props.srv.isTabBookmarks ? 'btn-tab btn-tab__active' : 'btn-tab'}`}
          onFilmClick={this.props.onTabFilms}
          onBookmarkClick={this.props.onTabBookmarks}
        />


        {this.props.srv.isTabFilms ?
          <FilmsList
            itemsToShow={itemsToShow}
            filmsList={updatedFilms}
            onCheckFilm={this.props.onCheckFilm}
            bookmarks={bookmarks}
            onNavigate={this.onNavigate}
            updTags={updatedTags}
            btnName='More'
            isActive={isActiveBtn}
            handleShowMore={this.showMoreFilm}
          />

          :

          <BookmarkList
            onCheckFilm={this.props.onCheckFilm}
            bookmarks={bookmarks}
            onNavigate={this.onNavigate}
          />
        }

      </WithClass>
    );
  }
}

const mapStateToProps = state => {
  return {
    srv: state.srv, // так как мы используем combineReducers нужно указать к какому редьюсеру мы обращаемся
    flm: state.flm,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetFilmsList: () => dispatch(actionCreators.getFilmsList()),
    onTabFilms: () => dispatch(actionCreators.activeTabFilms()),
    onTabBookmarks: () => dispatch(actionCreators.activeTabBookmarks()),
    onCheckFilm: (film) => dispatch(actionCreators.checkFilm(film)),
    onSearchFilter: (text) => dispatch(actionCreators.searchFilter(text)),
    onTagFilter: (tag) => dispatch(actionCreators.tagFilter(tag)),
    onDeleteTag: (tag) => dispatch(actionCreators.tagDelete(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp);