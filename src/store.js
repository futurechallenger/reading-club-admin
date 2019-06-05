import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(getBookList, 
//     composeWithDevTools(
//         applyMiddleware(thunk),
// ));

export default store;