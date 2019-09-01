import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './containers/App';
// import { rootReducers } from './reducers/index';

import './index.css';


// const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

import {persistor, store} from './configureStore'; 

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading = { null } persistor={persistor}>
			<BrowserRouter>
				<Route path="/:page?/:filter1?/:filter2?" component={App} />
			</BrowserRouter>
		</PersistGate>
	</Provider>
	, document.getElementById('root')
)

