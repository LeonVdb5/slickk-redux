import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../actions/index';
import { ProductHoldFilters, ProductShineFilters, HairLengthFilters, HairTypeFilters } from '../constants';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { push } from 'react-router-redux';

import HairstyleList from '../components/HairstyleList';
import ProductList from '../components/ProductList';



const getVisibleProducts = (products, holdFilter, shineFilter) => {
	let visibleProducts = []
	switch (holdFilter) {
		case ProductHoldFilters.SHOW_ALL_HOLD:
			visibleProducts = products;
			break;
		case ProductHoldFilters.SHOW_HIGH_HOLD:
			visibleProducts = products.filter();
			break;
		case ProductHoldFilters.SHOW_MED_HOLD:
			visibleProducts = products.filter();
			break;
		case ProductHoldFilters.SHOW_LOW_HOLD:
			visibleProducts = products.filter();
			break;
		default:
			throw new Error("Unknown hold filter: " + holdFilter);
	}
	switch (shineFilter) {
		case ProductShineFilters.SHOW_ALL_SHINE:
			return visibleProducts
		case ProductShineFilters.SHOW_HIGH_SHINE:
			return visibleProducts.filter()
		case ProductShineFilters.SHOW_MED_SHINE:
			return visibleProducts.filter()
		case ProductShineFilters.SHOW_LOW_SHINE:
			return visibleProducts.filter()
		default:
			throw new Error("Unknown shine filter: " + shineFilter);
	}
}

const getVisibleHairstyles = (hairstyles, lengthFilter, typeFilter) => {
	let visibleHairstyles = []
	switch (lengthFilter) {
		case HairLengthFilters.SHOW_ALL_LENGTH:
			visibleHairstyles = hairstyles;
			break;
		case HairLengthFilters.SHOW_LONG_LENGTH:
			visibleHairstyles = hairstyles.filter();
			break;
		case HairLengthFilters.SHOW_MED_LENGTH:
			visibleHairstyles = hairstyles.filter();
			break;
		case HairLengthFilters.SHOW_SHORT_LENGTH:
			visibleHairstyles = hairstyles.filter();
			break;
		default:
			throw new Error("Unknown hair length filter: " + lengthFilter);
	}
	switch (typeFilter) {
		case HairTypeFilters.SHOW_ALL_HAIRTYPES:
			return visibleHairstyles
		case HairTypeFilters.SHOW_STRAIGHT_HAIR:
			return visibleHairstyles.filter()
		case HairTypeFilters.SHOW_WAVY_HAIR:
			return visibleHairstyles.filter()
		case HairTypeFilters.SHOW_CURLY_HAIR:
			return visibleHairstyles.filter()
		case HairTypeFilters.SHOW_COILY_HAIR:
			return visibleHairstyles.filter()
		default:
			throw new Error("Unknown hairtype filter: " + typeFilter);
	}
}



const mapStateToProps = (state) => {
	return {
  	products: getVisibleProducts(state.requestPosts.products, state.ProductHoldFilter, state.ProductShineFilter),
  	hairstyles: getVisibleHairstyles(state.requestPosts.hairstyles, state.HairLengthFilter, state.HairTypeFilter),
  	isPending: state.requestPosts.isPending
	}
}



const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPosts: () => dispatch(requestPosts())
  }
}  


class VisiblePostList extends Component {

	componentDidMount(){
    this.props.onRequestPosts();
  }


	render () {

		let { products, hairstyles } = this.props;
		
		return (
			<div>
				<Link to="/products">PRODUCTS</Link>
				<Link to="/hairstyles">HAIRSTYLES</Link>
				<Switch>
					<Route
						path="/products"
						render={(props) => <ProductList {...props} products={products} />}
					/>
					<Route
						path="/hairstyles"
						render={props => <HairstyleList {...props} hairstyles={hairstyles} />}
					/>
				</Switch>
			</div>
			
		);
	}


}


export default connect(mapStateToProps, mapDispatchToProps)(VisiblePostList)