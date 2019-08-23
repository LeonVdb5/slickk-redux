import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/App';
import { rootReducers } from './reducers/index';

import './index.css';


const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
				<Route path="/:filter?" component={App} />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
)

