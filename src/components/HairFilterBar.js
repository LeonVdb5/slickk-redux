import React from 'react';
import FilterLink from '../containers/FilterLink';
import { HairLengthFilters, HairTypeFilters } from '../constants';
import './PostFilter.css';


export const HairFilterBar = () => (
	<div className = "filter-items-container">
		<br/>
		<FilterLink  filter={HairLengthFilters.SHOW_ALL_LENGTH} type={"hairlength"}>ALL HAIR LENGTHS </FilterLink>
		<FilterLink  filter={HairLengthFilters.SHOW_SHORT_LENGTH} type={"hairlength"}>SHORT </FilterLink>
		<FilterLink  filter={HairLengthFilters.SHOW_MED_LENGTH} type={"hairlength"}>MEDIUM</FilterLink>
		<FilterLink  filter={HairLengthFilters.SHOW_LONG_LENGTH} type={"hairlength"}>LONG</FilterLink>
		<br/>
		<FilterLink  filter={HairTypeFilters.SHOW_ALL_HAIRTYPES} type={"hairtype"}>ALL HAIR TYPES </FilterLink>
		<FilterLink  filter={HairTypeFilters.SHOW_STRAIGHT_HAIR} type={"hairtype"}>STRAIGHT </FilterLink>
		<FilterLink  filter={HairTypeFilters.SHOW_WAVY_HAIR} type={"hairtype"}>WAVY</FilterLink>
		<FilterLink  filter={HairTypeFilters.SHOW_CURLY_HAIR} type={"hairtype"}>CURLY</FilterLink>
		<FilterLink  filter={HairTypeFilters.SHOW_COILY_HAIR} type={"hairtype"}>COILY</FilterLink>
	</div>
)

export default HairFilterBar