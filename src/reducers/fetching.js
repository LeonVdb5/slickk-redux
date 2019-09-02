import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  AUTH_REGISTER,
  AUTH_LOGIN,
  AUTH_ERROR,
  AUTH_SIGNOUT
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

export const auth = (state = {}, action={}) => {
  switch (action.type) {
    case AUTH_REGISTER:
      return Object.assign({}, state, { user: {}, errorMessage: '' })
    case AUTH_LOGIN: 
      return Object.assign({}, state, { user: action.payload, errorMessage: '' })
    case AUTH_ERROR:
      return Object.assign({}, state, { user: {}, errorMessage: action.payload })
    case AUTH_SIGNOUT:
      return Object.assign({}, state, { user: {}, errorMessage: ''})
    default: 
      return state
  }
}