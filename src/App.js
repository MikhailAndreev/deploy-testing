import React, {Component} from 'react';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom';

import FilterApp from "./containers/FilterApp";
import * as staticData from './assets/static-data';

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
              <BrowserRouter basename="/path-maker">
                <Switch>
                  <Route path='/' component={FilterApp} exact/>

                </Switch>
              </BrowserRouter>
            </div>
        );
    }
}

export default App;

