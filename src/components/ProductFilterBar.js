import React from 'react';
import FilterLink from '../containers/FilterLink';
import { NavLink } from 'react-router-dom';
import { ProductHoldFilters, ProductShineFilters } from '../constants';
import './PostFilter.css';

export const ProductFilterBar = ({ holdFilter, shineFilter }) => (
	<div className = "filter-items-container">
		<br/>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/all-holds/${shineFilter}`} activeClassName="selectedLink">
			<FilterLink filter={ProductHoldFilters.SHOW_ALL_HOLD} type="hold">ALL HOLDS</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/low-hold/${shineFilter}`} activeClassName="selectedLink">
			<FilterLink filter={ProductHoldFilters.SHOW_LOW_HOLD} type="hold">Low</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/med-hold/${shineFilter}`} activeClassName="selectedLink">
			<FilterLink filter={ProductHoldFilters.SHOW_MED_HOLD} type="hold">Medium</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/high-hold/${shineFilter}`} activeClassName="selectedLink">
			<FilterLink filter={ProductHoldFilters.SHOW_HIGH_HOLD} type="hold">High</FilterLink>
		</NavLink>
		<br/>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/${holdFilter}/all-shines`} activeClassName="selectedLink">
			<FilterLink filter={ProductShineFilters.SHOW_ALL_SHINE} type="shine">ALL SHINES</FilterLink>
		</NavLink>
		
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/${holdFilter}/low-shine`} activeClassName="selectedLink">
			<FilterLink filter={ProductShineFilters.SHOW_LOW_SHINE} type="shine">Low</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/${holdFilter}/med-shine`} activeClassName="selectedLink">
			<FilterLink filter={ProductShineFilters.SHOW_MED_SHINE} type="shine">Medium</FilterLink>
		</NavLink>
		<NavLink className="filter-text" style={{ textDecoration: 'none', color: 'black' }} to={`/products/${holdFilter}/high-shine`} activeClassName="selectedLink">
			<FilterLink filter={ProductShineFilters.SHOW_HIGH_SHINE} type="shine">High</FilterLink>
		</NavLink>
	</div>
)

export default ProductFilterBar