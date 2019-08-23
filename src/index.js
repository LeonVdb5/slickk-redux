import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/App';
import {requestPosts} from './reducers/index';
import {ProductHoldFilter, ProductShineFilter, HairLengthFilter, HairTypeFilter } from './reducers/filter';

import './index.css';

const rootReducers = combineReducers( {requestPosts, ProductHoldFilter, ProductShineFilter, HairLengthFilter, HairTypeFilter} )
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
				<Route path="/:filter?" component={App} />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
)

