import {combineReducers} from 'redux';
import getBookList from '../reducers/bookList';

export default combineReducers({
  bookList: getBookList,
});