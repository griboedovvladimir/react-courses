import { combineReducers } from 'redux';
import newsReducer from './news';
import searchReducer from './search';
import sortReducer from './sort';

export default combineReducers({
    news: newsReducer,
    search: searchReducer,
    sort: sortReducer
});
