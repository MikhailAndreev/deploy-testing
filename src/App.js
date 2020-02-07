import React, {Component} from 'react';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom';

import FilterApp from "./containers/FilterApp";
import * as staticData from './assets/static-data';
import FilmPage from "./containers/FilmPage";

const getAddress = () => {
  console.log(staticData.filmsList)
};

class App extends Component {

  componentDidMount() {
    getAddress();
  }

  render() {
        return(
            <div>
                <Switch>
                    <Route path='/film'  component={FilmPage}/>
                    <Route path='/' exact component={FilterApp}/>
                </Switch>
            </div>
        );
    }
}

export default App;

