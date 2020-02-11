import {combineReducers} from "redux";
import service from './service';
import filmsList from './filmsList';

const filmsApp = combineReducers({
    flm: filmsList,
    srv: service
});

export default filmsApp