import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomInput from "../../components/atoms/CustomInput";
import './FilterApp.scss'
import CustomButton from "../../components/atoms/CustomButton";
import * as actionCreators from '../../store/actions/index'
import ListItem from "../../components/atoms/ListItem";
import axios from '../../utils/axios-data';
import TagItem from "../../components/atoms/TagItem";


class FilterApp extends Component {
  state = {
    count: 10,
    filmTitle: '',
    tagsList: [],
  };

  componentDidMount() {
    this.props.onGetFilmsList();
    this.setState({
      tagsList: this.props.flm.tags
    });
    console.log(this.props.flm.tags)
  }

  showMoreFilm = () => {
    this.setState({
      count: this.state.count + 10
    })
  };

  onSearchFilter = () => {

  };

  onTagFilter = () => {

  };




  onNavigate = () => {
    this.props.history.push('/film')
  };

  render() {
    const {updatedFilms, films} = this.props.flm;
    const isActiveBtn = Math.ceil(films.length) === this.state.count || this.props.flm.updatedTags && this.props.flm.updatedTags.length > 0;
    const renderFilmsList = updatedFilms.slice(0, this.state.count).map((film, index) => {
      return (
        <ListItem
          handleClick={() => this.props.onCheckFilm(film.title)}
          key={index}
          style='listItem'
          imageStyle='bookmark-img'
          title={film.title}
          data={this.props.flm.bookmarks}
          onNavigate={this.onNavigate}
          dataTags={this.props.flm.updatedTags}
          tags={film.tags}
        >
          {film.title}
        </ListItem>
      )
    });

    const renderBookmarkList = this.props.flm.bookmarks.map((film, index) => {
          return (
            <ListItem
              handleClick={() => this.props.onCheckFilm(film.title)}
              key={index}
              style='listItem'
              imageStyle='bookmark-img'
              id={film.title}
              title={film.title}
              data={this.props.flm.bookmarks}
              onNavigate={this.onNavigate}
              tags={film.tags}
            >
                {film.title}
            </ListItem>
          )
      });

    const renderTagList = this.state.tagsList.map((tag, index) => {
      const isTagClicked = this.props.flm.updatedTags.includes(tag);
        return (
          <TagItem
            key={index}
            handleClick={() => this.props.onTagFilter(tag)}
            tag={tag}
            style={`${isTagClicked ? 'tagItem__active' : 'tagItem'}`}
          />
        )
    });

    return (
      <div>
        <div className='filter-wrapper'>
          <div className='filter-section'>
            <div className='search-block'>
              <CustomInput
                style='input-search'
                placeholder='поиск...'
                handleChange={this.props.onSearchFilter}
              />

              <button>поиск</button>

            </div>

            <div className='tagsList'>
                {renderTagList}
            </div>

            <div className='tabs'>

              <CustomButton
                name='фильмы'
                style={`${this.props.srv.isTabFilms ? 'btn-tab btn-tab__active' : 'btn-tab'}`}
                handleClick={this.props.onTabFilms}
              />

              <CustomButton
                name='закладки'
                style={`${this.props.srv.isTabBookmarks ? 'btn-tab btn-tab__active' : 'btn-tab'}`}
                handleClick={this.props.onTabBookmarks}
              />

            </div>

            <div className='title'>
              pizza
            </div>
            {this.props.srv.isTabFilms ?

              <div className='list-films'>
                <div className='list'>
                  {renderFilmsList}
                </div>

                <CustomButton
                  name='More'
                  style={`${isActiveBtn ? 'btn-hide' : ''} ${'btn-tab'}`}
                  handleClick={this.showMoreFilm}
                />
              </div>

              :

              <div className='list-films'>
                <div className='list'>
                  {renderBookmarkList}
                </div>
              </div>
            }

          </div>
        </div>
      </div>
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
    onTagFilter: (tag) => dispatch(actionCreators.tagFilter(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp);