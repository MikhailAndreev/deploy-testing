import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomInput from "../../components/atoms/CustomInput";
import './FilterApp.scss'
import CustomButton from "../../components/atoms/CustomButton";
import * as actionCreators from '../../store/actions/index'
import ListItem from "../../components/atoms/ListItem";
import axios from '../../utils/axios-data';


class FilterApp extends Component {
    state = {
        count: 10
    };

    componentDidMount() {
            this.props.onGetFilmsList()
    }

    showMoreFilm = () => {
      this.setState({
          count: this.state.count + 10
      })
    };

    onNavigate = () => {
      this.props.history.push('/film')
    };

    render() {
        const {updatedFilms, films} = this.props.flm;
        const isActiveBtn = Math.ceil(films.length) === this.state.count;
        const renderFilmsList = updatedFilms.slice(0, this.state.count).map((film, index) => {
            return (
                <ListItem
                    handleClick={() => this.props.onCheckFilm(film.title)}
                    key={index}
                    style='listItem'
                    imageStyle='bookmark-img'
                    title={film.title}
                    array={this.props.flm.bookmarks}
                    onNavigate={this.onNavigate}
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
                    array={this.props.flm.bookmarks}
                    onNavigate={this.onNavigate}
                >
                    {film.title}
                </ListItem>
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
        onShowMore: () => dispatch(actionCreators.filmsShow()),
        onTabFilms: () => dispatch(actionCreators.activeTabFilms()),
        onTabBookmarks: () => dispatch(actionCreators.activeTabBookmarks()),
        onCheckFilm: (film) => dispatch(actionCreators.checkFilm(film)),
        onSearchFilter: (text) => dispatch(actionCreators.searchFilter(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp);