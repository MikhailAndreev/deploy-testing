import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomInput from "../../components/atoms/CustomInput";
import './FilterApp.scss'
import CustomButton from "../../components/atoms/CustomButton";
import * as actionCreators from '../../store/actions/index'

class FilterApp extends Component {
  state = {

  };

  componentDidMount() {
    this.props.onShowMore();
    console.log(this.props.srv)

  }

  componentDidUpdate() {
    console.log(this.props.srv.isDisabled)
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
                name='поиск'
                style='btn-tabs'
                />
                <CustomButton
                  name='закладки'
                  style='btn-tabs'
                />

              </div>

              <div className='title'>
                pizza
              </div>
              <div className='list-films'>
                <ul>
                  {this.props.srv.updatedFilms.map((film, index) => (
                      <li key={index} >
                        {film.title}
                      </li>
                  ))}

                </ul>

                <CustomButton
                    name='More'
                    // style='btn-tabs'
                    style={`${this.props.srv.isDisabled ? 'btn-hide' : ''} ${'btn-tabs'}`}
                    handleClick={this.props.onShowMore}
                />
              </div>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterApp);