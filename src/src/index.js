import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {reducer} from "./reducers";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
	</Provider>,
  document.getElementById('root')
);

reportWebVitals();
