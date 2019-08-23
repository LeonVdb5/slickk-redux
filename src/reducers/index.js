import { requestPosts } from './fetching.js'
import { ProductHoldFilter, ProductShineFilter, HairLengthFilter, HairTypeFilter } from './filter.js'
import { combineReducers } from 'redux';



export const rootReducers = combineReducers({
  requestPosts, 
  ProductHoldFilter, 
  ProductShineFilter, 
  HairLengthFilter, 
  HairTypeFilter
})


