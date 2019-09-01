import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//The below package defaults to local storage 
//note that local forage is recommended 
import storage from 'redux-persist/lib/storage' 

import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducers } from './reducers/index';


const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducers); 

//imported in index.js 
export const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, logger));
export const persistor = persistStore(store);
