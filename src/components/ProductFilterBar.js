import React from 'react';
import FilterLink from '../containers/FilterLink';
import { ProductHoldFilters, ProductShineFilters } from '../constants';
import './PostFilter.css';

export const ProductFilterBar = () => (
	<div className = "filter-items-container">
		<br/>
		<div className="default-sort">
			<FilterLink  filter={ProductHoldFilters.SHOW_ALL_HOLD} type="hold">ALL HOLDS</FilterLink>
		</div>
		<FilterLink  filter={ProductHoldFilters.SHOW_LOW_HOLD} type="hold">Low</FilterLink>
		<FilterLink  filter={ProductHoldFilters.SHOW_MED_HOLD} type="hold">Medium</FilterLink>
		<FilterLink  filter={ProductHoldFilters.SHOW_HIGH_HOLD} type="hold">High</FilterLink>
		<br/>
		<div className="default-sort">
			<FilterLink  filter={ProductShineFilters.SHOW_ALL_SHINE} type="shine">ALL SHINES</FilterLink>
		</div>
		<FilterLink  filter={ProductShineFilters.SHOW_LOW_SHINE} type="shine">Low</FilterLink>
		<FilterLink  filter={ProductShineFilters.SHOW_MED_SHINE} type="shine">Medium</FilterLink>
		<FilterLink  filter={ProductShineFilters.SHOW_HIGH_SHINE} type="shine">High</FilterLink>
	</div>
)

export default ProductFilterBar