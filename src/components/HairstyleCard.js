import React from 'react'
import { Link } from 'react-router-dom';
import likeIcon from '../icons/like.png';
import likedIcon from '../icons/like-red.png';


const HairstyleCard = ({ hairstyle }) => (
	<div className="card">
		<Link to="/" className="upper-card">
			<div>
				<img className="post-image" src={require(`../images/${hairstyle.pid}.jpg`)}/>
			</div>
			<div className="hairstyle-username">{hairstyle.username}</div>
			<div className="hairstyle-type">{hairstyle.hairstyle}</div>
		</Link>
		<div className="lower-card">
			<div className="post-likes">
				<div className="post-like-btn" onClick={this.onClickLike}>
					<img className="post-like-icon" src={likeIcon} alt="liked"/>
				</div>	
			<div className="post-like-number">{this.props.likes} likes</div>
			</div>
		</div>
	</div>
)

export default HairstyleCard