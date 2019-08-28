import React from 'react'
import { NavLink } from 'react-router-dom';
import './PostCard.css';
import likeIcon from '../icons/like.png';
import likedIcon from '../icons/like-red.png';
import userIcon from '../images/user.png';


const HairstyleCard = ({ hairstyle }) => (
	<div className="card">
		<NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
			<div className="upper-card-hairstyle">
				<div className="hairstyle-user">
					<img className="user-profile-pic" src={userIcon} alt="user-icon"/>
					<div className="hairstyle-username">{hairstyle.username}</div>
				</div>
				<div className="hairstyle-image-div">
					<img className="hairstyle-image" src={require(`../images/${hairstyle.pid}.jpg`)} alt="hairstyle"/>
				</div>
			</div>
		</NavLink>
		<div className="lower-card">
			<div className="post-likes">
				<div className="post-like-btn">
					<img className="post-like-icon" src={likeIcon} alt="liked"/>
				</div>	
				<div className="post-like-number">{hairstyle.numlikes} likes</div>
			</div>
			<div className="post-time">{hairstyle.time_posted}</div>
		</div>
	</div>
)

export default HairstyleCard