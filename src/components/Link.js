import React from 'react'

const Link = ({children, onClick}) => (
	<li onClick = {onClick}>
	{children}
	</li>
)

export default Link

