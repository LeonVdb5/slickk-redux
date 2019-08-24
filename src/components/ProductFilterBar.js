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
		<FilterLink  filter={ProductHoldFilters.SHOW_LOW_HOLD} type="hold">LOW</FilterLink>
		<FilterLink  filter={ProductHoldFilters.SHOW_MED_HOLD} type="hold">MEDIUM</FilterLink>
		<FilterLink  filter={ProductHoldFilters.SHOW_HIGH_HOLD} type="hold">HIGH</FilterLink>
		<br/>
		<div className="default-sort">
			<FilterLink  filter={ProductShineFilters.SHOW_ALL_SHINE} type="shine">ALL SHINES</FilterLink>
		</div>
		<FilterLink  filter={ProductShineFilters.SHOW_LOW_SHINE} type="shine">LOW</FilterLink>
		<FilterLink  filter={ProductShineFilters.SHOW_MED_SHINE} type="shine">MEDIUM</FilterLink>
		<FilterLink  filter={ProductShineFilters.SHOW_HIGH_SHINE} type="shine">HIGH</FilterLink>
	</div>
)

export default ProductFilterBar