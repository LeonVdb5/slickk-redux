import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED
} from '../constants';


export const requestPosts = (state={}, action={}) => {
  switch (action.type) {
    
    case REQUEST_POSTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    
    case REQUEST_POSTS_SUCCESS:
      return Object.assign({}, state, {
        products: action.payload.products,
        hairstyles: action.payload.hairstyles,
        isPending: false})
    
    case REQUEST_POSTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    
    default:
      return state
  }
}