import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import {Provider} from 'react-redux';
import store  from './components/stores'
import { LoginProvider } from './LoginContext'
import { FilterProductProvider } from './FilterProductContext'
ReactDOM.render(
  <LoginProvider>
    <FilterProductProvider>
      <Provider store = {store}>
        <App />
      </Provider>
    </FilterProductProvider>
  </LoginProvider>,
  document.getElementById('root')
);
