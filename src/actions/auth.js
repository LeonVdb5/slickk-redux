import { 
	AUTH_REGISTER,  
	AUTH_LOGIN,
	AUTH_ERROR } from '../constants'

export const register = (user) => (dispatch) => {
	return fetch('http://localhost:3000/users/register', {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	.then( (response) => {
		console.log(response);
		if (response.status < 400) {
			dispatch( {type: AUTH_REGISTER} ); 
		}
		else {
			dispatch({  
				type: AUTH_ERROR,
				payload: 'Email or Username already in use'})
		}
	})
	.catch(error => { //how to manage server errors?
		dispatch({  
		type: AUTH_ERROR,
		payload: 'Email or Username already in use'})
	})
}

export const login = (formData) => (dispatch) => {
	return fetch('http://localhost:3000/users/login', {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	})
	.then( (response) => {
		console.log(response);
		response.status < 400 
		? dispatch( {type: AUTH_LOGIN} )
		: dispatch( {type: AUTH_ERROR, payload: 'Incorrect username or password'})
	})
	.catch(error => { 
		console.log('server error');
	// 	dispatch({  
	// 	type: AUTH_ERROR,
	// 	payload: 'Incorrect username or password'})
	})
}

// export const checkAuth = ()




