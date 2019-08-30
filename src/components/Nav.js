import React from 'react';
import './Nav.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import FilterLink from '../containers/FilterLink'


const Nav = () => {

	return (
		<div className="nav-main">
			<div className="nav-left-container">
				<button>SEARCH</button>
			</div>
			<div className="nav-center-container">
				<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
					<FilterLink className="nav-logo" type='reset'>Slickk</FilterLink>
				</Link>
			</div>
			<div className="nav-right-container">
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/hairstyles" activeClassName="selectedLink">
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
 
