import React from 'react';
import './App.css';
import BookList from './component/BookList';
import { Provider } from 'react-redux';
import store from './store';
import { render } from 'react-dom';

const App = () => (
  <Provider store={store}>
      <div className="bookList">
         Library
      </div>
      <BookList/>
  </Provider>
);

export default App;
