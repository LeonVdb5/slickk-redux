import React from 'react';
import './Nav.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const Nav = () => {

	return (
		<div className="nav-main">
			<div className="nav-left-container">
				<button>SEARCH</button>
			</div>
			<div className="nav-center-container">
				<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
					<button className="nav-logo">Slickk</button>
				</Link>
			</div>
			<div className="nav-right-container">
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/hairstyles">
					<button className="nav-hairstyles">HAIRSTYLES</button>
				</NavLink>
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/products">
					<button className="nav-products">PRODUCTS</button>
				</NavLink>
				<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
					<button className="nav-login">LOGIN</button>
				</NavLink>
			</div>
		</div>
	);
}

export default Nav
 
