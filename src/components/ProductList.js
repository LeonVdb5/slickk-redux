import React from 'react'
import ProductCard from './ProductCard'
import '../containers/VisiblePostList.css'

const ProductList = (props) => (
	(props.products) ?
		<div className="scroll-box" style={{overflowY: 'scroll', height: '100%', bottom: '25px'}}>
			<div className="post-components">
				{props.products.map((product, i) => (
					<ProductCard product={product} key={i}/>
				))}
			</div>
		</div>
	: <div>LOADING</div>
)

export default ProductList