import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomInput from "../../components/atoms/CustomInput";
import './FilterApp.scss'
import CustomButton from "../../components/atoms/CustomButton";
import * as actionCreators from '../../store/actions/index'
import ListItem from "../../components/atoms/ListItem";

class FilterApp extends Component {
  state = {

  };

  componentDidMount() {
    // this.props.getCurrentTab();
    console.log(this.props.srv)
  }

  componentDidUpdate() {
    // console.log('IS TAB FILMS ACTIVE ?', this.props.srv.isTabFilms);
    // console.log('IS TAB BOOKMARKS ACTIVE ?',this.props.srv.isTabBookmarks)
  }

  render () {
    return (
      <div>
          <div className='filter-wrapper'>
            <div className='filter-section'>
              <div className='search-block'>
                <CustomInput
                style='input-search'
                placeholder='поиск...'
                />

                <button>поиск</button>

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
              { this.props.srv.isTabFilms ?

                <div className='list-films'>
                <ul className='list'>
                {this.props.srv.updatedFilms.map((film, index) => (
                    <ListItem
                    handleClick={() => this.props.onCheckFilm(film.title)}
                    key={index}
                    style='listItem'>
                      {film.title}
                    </ListItem>
                ))}

                </ul>

                <CustomButton
                name='More'
                style={`${this.props.srv.isDisabled ? 'btn-hide' : ''} ${'btn-tab'}`}
                handleClick={this.props.onShowMore}
                />
                </div>

                  :

                  // 'none'
                <div className='list-films'>
                  <ul className='list'>
                    {this.props.srv.bookmarks.map((film, index) => (
                        <ListItem
                            handleClick={() => this.props.onCheckFilm(film.title)}
                            key={index}
                            style='listItem'>
                          {film.title}
                        </ListItem>
                    ))}

                  </ul>
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
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onShowMore: () => dispatch(actionCreators.filmsShow()),
    onTabFilms: () => dispatch(actionCreators.activeTabFilms()),
    onTabBookmarks: () => dispatch(actionCreators.activeTabBookmarks()),
    onStoreBookmarks: (film) => dispatch(actionCreators.storeBookmarks(film)),
    onCheckFilm: (film) => dispatch(actionCreators.checkFilm(film)),
    onDeleteBookmark: () => dispatch(actionCreators.deleteBookmarks())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp);