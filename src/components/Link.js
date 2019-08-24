import React from 'react'
import './PostFilter.css';

const Link = ({children, onClick}) => (
	<button onClick = {onClick}>
		{children}
	</button>
)

export default Link

