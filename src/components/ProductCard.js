import React from 'react'
import { NavLink } from 'react-router-dom';
import likeIcon from '../icons/like.png';
import likedIcon from '../icons/like-red.png';


const ProductCard = ({ product }) => (
	<div className="card">
		<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
			<div className="upper-card">
				<div className="product-title">{product.name}</div>
				<div className="product-image-div">
					<img className="product-image" src={require(`../images/${product.pid}.jpg`)} alt="product"/>
				</div>
				<div className="product-type">{product.type}</div>
				<div className="product-price">{product.price}</div>
			</div>
		</NavLink>
		<div className="lower-card">
			<div className="post-likes">
				<div className="post-like-btn">
					<img className="post-like-icon" src={likeIcon} alt="liked"/>
				</div>	
				<div className="post-like-number">{product.numlikes} likes</div>
			</div>
			<div className="post-time">{product.time_posted}</div>
		</div>
	</div>
)

export default ProductCard