import React, { Component } from 'react';
import './Nav.css';
import SearchIcon from '../icons/search-icon.png'

class Searchbar extends Component {
	
	render() {
		return (
			<div className="searchbar">
				<img className="search-icon" src={SearchIcon} alt="search"/>
				<input className="search-box" placeholder="Search" />
			</div>
		);
	}
}

export default Searchbar;