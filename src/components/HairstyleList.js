import React from 'react'
import HairstyleCard from './HairstyleCard'

const HairstyleList = (props) => (
	(props.hairstyles) ?
		<div className="scroll-box" style={{overflowY: 'scroll', height: '100%'}}>
			<div className="post-components">
				{props.hairstyles.map((hairstyle, i) => (
					<HairstyleCard hairstyle={hairstyle} key={i} />
				))}
			</div>
		</div>
	: <div>LOADING</div>
)

export default HairstyleList