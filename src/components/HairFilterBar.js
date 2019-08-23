import React from 'react';
import FilterLink from '../containers/FilterLink';
import { HairLengthFilters, HairTypeFilters } from '../constants';


export const HairFilterBar = () => (
	<div className = "hairFilterBar">
		<ul>
			<FilterLink  filter={HairLengthFilters.SHOW_ALL_LENGTH}>
				ALL HAIR LENGTHS 
			</FilterLink>
			<FilterLink  filter={HairLengthFilters.SHOW_SHORT_LENGTH}>
				SHORT 
			</FilterLink>
			<FilterLink  filter={HairLengthFilters.SHOW_MED_LENGTH}>
				MEDIUM
			</FilterLink>
			<FilterLink  filter={HairLengthFilters.SHOW_LONG_LENGTH}>
				LONG
			</FilterLink>
			<FilterLink  filter={HairTypeFilters.SHOW_ALL_HAIRTYPES}>
				ALL HAIR TYPES 
			</FilterLink>
			<FilterLink  filter={HairTypeFilters.SHOW_STRAIGHT_HAIR}>
				STRAIGHT 
			</FilterLink>
			<FilterLink  filter={HairTypeFilters.SHOW_WAVY_HAIR}>
				WAVY
			</FilterLink>
			<FilterLink  filter={HairTypeFilters.SHOW_CURLY_HAIR}>
				CURLY
			</FilterLink>
			<FilterLink  filter={HairTypeFilters.SHOW_COILY_HAIR}>
				COILY
			</FilterLink>
		</ul>
	</div>
)

export default HairFilterBar