import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import FilterLink from '../containers/FilterLink'
import Searchbar from './Searchbar'
import AccountMenu from './AccountMenu'

//Auth actions 
import * as actions from '../actions/auth';


const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	}
}

class Nav extends Component {
	constructor(props) {
    	super(props);
    }

	render () {


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
					<div className="nav-right-container-link">
						<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/hairstyles/all-lengths/all-types" activeClassName="selectedLink">
							<FilterLink className="nav-hairstyles" type='reset'>HAIRSTYLES</FilterLink>
						</NavLink>
					</div>
					<div className="nav-right-container-link">
						<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/products/all-holds/all-shines" activeClassName="selectedLink">
							<FilterLink className="nav-products" type='reset'>PRODUCTS</FilterLink>
						</NavLink>
					</div>
					{ this.props.user.username 
						? <div><AccountMenu handleSignout={this.props.signout}/></div>
						: <div className="nav-right-container-link">
							<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login" activeClassName="selectedLink">
								<button className="nav-login">LOGIN</button>
							</NavLink>
						</div>
					}
				</div>
			</div>
		);
	}	
}


export default connect(mapStateToProps, actions)(Nav)
 
