import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => (
	(props.products) ?
		<div className="scroll-box">
			{props.products.map((product, i) => (
				<ProductCard product={product} key={i}/>
			))}
		</div>
	: <div>LOADING</div>
)

export default ProductList