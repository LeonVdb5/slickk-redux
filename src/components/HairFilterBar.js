import React from 'react';
import FilterLink from '../containers/FilterLink';
import { HairLengthFilters, HairTypeFilters } from '../constants';
import './PostFilter.css';


export const HairFilterBar = () => (
	<div className = "filter-items-container">
		<br/>
		<div className="default-sort">
			<FilterLink filter={HairLengthFilters.SHOW_ALL_LENGTH} type={"hairlength"}>ALL HAIR LENGTHS </FilterLink>
		</div>
		<FilterLink filter={HairLengthFilters.SHOW_SHORT_LENGTH} type={"hairlength"}>Short</FilterLink>
		<FilterLink filter={HairLengthFilters.SHOW_MED_LENGTH} type={"hairlength"}>Medium</FilterLink>
		<FilterLink filter={HairLengthFilters.SHOW_LONG_LENGTH} type={"hairlength"}>Long</FilterLink>
		<br/>
		<div className="default-sort">
			<FilterLink filter={HairTypeFilters.SHOW_ALL_HAIRTYPES} type={"hairtype"}>ALL HAIR TYPES </FilterLink>
		</div>
		<FilterLink filter={HairTypeFilters.SHOW_STRAIGHT_HAIR} type={"hairtype"}>Straight</FilterLink>
		<FilterLink filter={HairTypeFilters.SHOW_WAVY_HAIR} type={"hairtype"}>Wavy</FilterLink>
		<FilterLink filter={HairTypeFilters.SHOW_CURLY_HAIR} type={"hairtype"}>Curly</FilterLink>
		<FilterLink filter={HairTypeFilters.SHOW_COILY_HAIR} type={"hairtype"}>Coily</FilterLink>
	</div>
)

export default HairFilterBar