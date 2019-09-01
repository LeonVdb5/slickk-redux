import { 
	AUTH_REGISTER,  
	AUTH_LOGIN,
	AUTH_ERROR,
	AUTH_SIGNOUT
} from '../constants'

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
	.then((res) => {
		console.log(res);
		res.status < 400 
		? dispatch({ type: AUTH_LOGIN, payload: { user: res.json() } })
		: dispatch({ type: AUTH_ERROR, payload: 'Incorrect username or password' })
	})
	.catch(error => { 
		console.log('server error');
	// 	dispatch({  
	// 	type: AUTH_ERROR,
	// 	payload: 'Incorrect username or password'})
	})
}

export const signout = () => (dispatch) => {
	return fetch('http://localhost:3000/users/signout', {
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		}
	})
	.then((res) => {
		res.status < 400
		? dispatch({ type: AUTH_SIGNOUT })
		: dispatch({ type: AUTH_ERROR, payload: 'Sign out failed: unable to sign out' })
	})
	.catch(error => {
		console.log('server error');
	})
}

// export const checkAuth = ()





