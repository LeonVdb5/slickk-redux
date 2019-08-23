import React from 'react'
import HairstyleCard from './HairstyleCard'

const HairstyleList = (props) => (
	(props.hairstyles) ?
		<div className="scroll-box">
			{props.hairstyles.map((hairstyle, i) => (
				<HairstyleCard hairstyle={hairstyle} key={i} />
			))}
		</div>
	: <div>LOADING</div>
)

export default HairstyleList