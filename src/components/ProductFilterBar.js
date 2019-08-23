import React from 'react';
import FilterLink from '../containers/FilterLink';
import { ProductHoldFilters, ProductShineFilters } from '../constants';

export const ProductFilterBar = () => (
	<div className = "hairFilterBar">
		<ul>
			<FilterLink  filter={ProductHoldFilters.SHOW_ALL_HOLD}>
				ALL HOLDS 
			</FilterLink>
			<FilterLink  filter={ProductHoldFilters.SHOW_LOW_HOLD}>
				LOW
			</FilterLink>
			<FilterLink  filter={ProductHoldFilters.SHOW_MED_HOLD}>
				MEDIUM
			</FilterLink>
			<FilterLink  filter={ProductHoldFilters.SHOW_HIGH_HOLD}>
				HIGH
			</FilterLink>
			<FilterLink  filter={ProductShineFilters.SHOW_ALL_SHINE}>
				ALL SHINES 
			</FilterLink>
			<FilterLink  filter={ProductShineFilters.SHOW_LOW_SHINE}>
				LOW 
			</FilterLink>
			<FilterLink  filter={ProductShineFilters.SHOW_MED_SHINE}>
				MEDIUM
			</FilterLink>
			<FilterLink  filter={ProductShineFilters.SHOW_HIGH_SHINE}>
				HIGH
			</FilterLink>
		</ul>
	</div>
)

export default ProductFilterBar