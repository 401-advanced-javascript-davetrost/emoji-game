import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './reset.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
