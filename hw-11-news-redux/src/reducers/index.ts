import { combineReducers } from 'redux';
import newsReducer from './news';
import searchReducer from './search';
import sortReducer from './sort';
import catSortReducer from './catsort';

export default combineReducers({
    news: newsReducer,
    search: searchReducer,
    sort: sortReducer,
    catsort: catSortReducer
});
