import {combineReducers} from "redux";
import filter from './filter';
import service from './service';
import filmsList from './filmsList';

const filmsApp = combineReducers({
    flm: filmsList,
    ftr: filter,
    srv: service
});

export default filmsApp