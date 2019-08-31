import React from 'react';
import './Nav.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import FilterLink from '../containers/FilterLink'
import Searchbar from './Searchbar'


const Nav = () => {

	return (
		<div className="nav-main">
			<div className="nav-left-container">
				<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
					<FilterLink className="nav-logo" type='reset'>Slickk</FilterLink>
				</Link>
			</div>
			<div className="nav-center-container">
				<Searchbar />
			</div>
			<div className="nav-right-container">
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/hairstyles/all-lengths/all-types" activeClassName="selectedLink">
					<FilterLink className="nav-hairstyles" type='reset'>HAIRSTYLES</FilterLink>
				</NavLink>
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/products/all-holds/all-shines" activeClassName="selectedLink">
					<FilterLink className="nav-products" type='reset'>PRODUCTS</FilterLink>
				</NavLink>
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login" activeClassName="selectedLink">
					<button className="nav-login">LOGIN</button>
				</NavLink>
			</div>
		</div>
	);
}

export default Nav
 
