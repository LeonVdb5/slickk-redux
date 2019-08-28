import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED
} from '../constants'

export const requestPosts = () => (dispatch) => {
  dispatch({ type: REQUEST_POSTS_PENDING })
  fetch('http://localhost:3000/products/')
    .then(res => res.json())
    .then(data => {
      let products = [];
      let hairstyles = [];
      for (let i=0; i<data.length; i++)  {
        if (data[i].post_type === "product") {
          products.push(data[i]);
        } else {
          hairstyles.push(data[i]);
        }
      }
      dispatch({
        type: REQUEST_POSTS_SUCCESS,
        payload: {hairstyles: hairstyles, products: products}
      });
    })
    .catch(error => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }))
}

export const setHoldFilter = filter => ({
  type: 'SET_HOLD_FILTER',
  filter
})

export const setShineFilter = filter => ({
  type: 'SET_SHINE_FILTER',
  filter
})

export const setHairlengthFilter = filter => ({
  type: 'SET_HAIRLENGTH_FILTER',
  filter
})

export const setHairtypeFilter = filter => ({
  type: 'SET_HAIRTYPE_FILTER',
  filter
})
export const resetFilter = () => ({
  type: 'RESET_FILTER'
})