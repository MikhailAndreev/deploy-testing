import {combineReducers} from "redux";
import filter from './filter';
import service from './service';

const filmsApp = combineReducers({
    ftr: filter,
    srv: service
});

export default filmsApp