import React from 'react'
import { Link } from 'react-router-dom';
import likeIcon from '../icons/like.png';
import likedIcon from '../icons/like-red.png';


const ProductCard = ({ product }) => (
	console.log(product),
	<div className="card">
		<Link to="/" className="upper-card">
			<div>
				<img className="post-image" src={require(`../images/${product.pid}.jpg`)}/>
			</div>
			<div className="product-name">{product.name}</div>
			<div className="product-type">{product.type}</div>
			<div className="product-price">{product.price}</div>
		</Link>
		<div className="lower-card">
			<div className="post-likes">
				<div className="post-like-btn">
					<img className="post-like-icon" src={likeIcon} alt="liked"/>
				</div>	
			<div className="post-like-number">{product.numlikes} likes</div>
			</div>
		</div>
	</div>
)

export default ProductCard