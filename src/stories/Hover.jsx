import React from 'react'
import { useHover } from 'bjork_react-hookup'

const Hover = () => {
	const [ isHover, bind ] = useHover() 

	return (
		<div>
			<div 
				{...bind} 
				style={{
					height: "50px", 
					width: "50px", 
					backgroundColor: "black",
					display: 'grid',
					placeContent: 'center',
			}}>{isHover ? '😁' : '☹️'}</div>
		</div>
	)
}

export default Hover
