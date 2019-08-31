import React from 'react';
import { NavLink } from 'react-router-dom';
import FilterLink from '../containers/FilterLink';
import { HairLengthFilters, HairTypeFilters } from '../constants';
import './PostFilter.css';


export const HairFilterBar = ({ lengthFilter, typeFilter }) => (
	<div className = "filter-items-container">
		<br/>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/all-lengths/${typeFilter}`} activeClassName="selectedLink">
			<FilterLink filter={HairLengthFilters.SHOW_ALL_LENGTH} type={"hairlength"}>ALL HAIR LENGTHS </FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/short/${typeFilter}`} activeClassName="selectedLink">
			<FilterLink filter={HairLengthFilters.SHOW_SHORT_LENGTH} type={"hairlength"}>Short</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/medium/${typeFilter}`} activeClassName="selectedLink">
			<FilterLink filter={HairLengthFilters.SHOW_MED_LENGTH} type={"hairlength"}>Medium</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/long/${typeFilter}`} activeClassName="selectedLink">
			<FilterLink filter={HairLengthFilters.SHOW_LONG_LENGTH} type={"hairlength"}>Long</FilterLink>
		</NavLink>
		<br/>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/${lengthFilter}/all-types`} activeClassName="selectedLink">
			<FilterLink filter={HairTypeFilters.SHOW_ALL_HAIRTYPES} type={"hairtype"}>ALL HAIR TYPES </FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/${lengthFilter}/straight`} activeClassName="selectedLink">
			<FilterLink filter={HairTypeFilters.SHOW_STRAIGHT_HAIR} type={"hairtype"}>Straight</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/${lengthFilter}/wavy`} activeClassName="selectedLink">
			<FilterLink filter={HairTypeFilters.SHOW_WAVY_HAIR} type={"hairtype"}>Wavy</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/${lengthFilter}/curly`} activeClassName="selectedLink">
			<FilterLink filter={HairTypeFilters.SHOW_CURLY_HAIR} type={"hairtype"}>Curly</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/hairstyles/${lengthFilter}/coily`} activeClassName="selectedLink">
			<FilterLink filter={HairTypeFilters.SHOW_COILY_HAIR} type={"hairtype"}>Coily</FilterLink>
		</NavLink>
	</div>
)

export default HairFilterBar