import React, {Component} from 'react';
import {connect} from "react-redux";

import '../../containers/FilterApp/FilterApp.scss'
import CustomButton from "../../components/atoms/CustomButton";
import * as staticData from '../../assets/static-data';
import WithClass from '../../hoc/withClass';
import './FilmPage.scss'
import { NavLink } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class FilmPage extends Component {
  state = {
    dataFilm: null,
    isBookmark: false
  };

  getData = () => {
    const bookmarkList = this.props.flm.bookmarks;
    const film = staticData.filmsList.find(item => item.title === this.props.match.params.filmName);
    const check = bookmarkList.some(item => item.title === this.props.match.params.filmName);
    this.setState({
      dataFilm: film,
      isBookmark: check
    });
    console.log('Bookmark list ', bookmarkList)
  };

  componentDidMount() {
    this.getData();
    console.log(this.state.isBookmark)
  }

  onCheck = () => {
    const bookmarkList = this.props.flm.bookmarks;
    const film = staticData.filmsList.find(item => item.title === this.props.match.params.filmName);
    const check = bookmarkList.some(item => item.title === this.props.match.params.filmName);
    this.props.onCheckFilm(film.title);
    this.setState({
      isBookmark: !this.state.isBookmark
    });

  };

  render() {
    const {dataFilm, isBookmark} = this.state;

    return (
      <WithClass classes='filmpage-wrapper'>

        <WithClass classes='nav-section'>
          <NavLink to='/'>
            Назад
          </NavLink>
        </WithClass>

        <WithClass classes='film-section-wrapper'>
          <div className='img-section'>

          </div>
          <WithClass classes='film-section'>
            {dataFilm !== null &&
            <h2>
              {dataFilm.title}
            </h2>
            }

            <button
              onClick={this.onCheck}
              >
              {isBookmark ? 'УДАЛИТЬ С ЗАКЛАДОК' : 'ДОБАВИТЬ В ЗАКЛАДКИ'}
            </button>
          </WithClass>
        </WithClass>

      </WithClass>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onCheckFilm: (film) => dispatch(actionCreators.checkFilm(film)),
  }
};

const mapStateToProps = state => {
  return {
    flm: state.flm,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
