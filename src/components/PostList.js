import React from 'react'
import ProductCard from './ProductCard'
import HairstyleCard from './HairstyleCard'
import '../containers/VisiblePostList.css'
const Quicksort = require('optimized-quicksort');

const PostList = (props) => (
	(props.products && props.hairstyles) ?
		// <div className="scroll-box" style={{overflowY: 'scroll', height: '100%'}}>
		<div className="scroll-box">
			<div className="post-components">
				{Quicksort.sort(props.products.concat(props.hairstyles),(a,b) => b.numlikes-a.numlikes)
					.map((post, i) => {
						if (post.post_type === 'product'){
							return <ProductCard product={post} key={i}/>
						}
						else {
							return <HairstyleCard hairstyle={post} key={i}/>
						}
					})
				}
			</div>
		</div>
	: <div>LOADING</div>
)

export default PostList