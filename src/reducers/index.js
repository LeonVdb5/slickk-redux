import { requestPosts, auth } from './fetching.js'
import { ProductHoldFilter, ProductShineFilter, HairLengthFilter, HairTypeFilter } from './filter.js'
import { combineReducers } from 'redux';



export const rootReducers = combineReducers({
  requestPosts, 
  auth,
  ProductHoldFilter, 
  ProductShineFilter, 
  HairLengthFilter, 
  HairTypeFilter
})


