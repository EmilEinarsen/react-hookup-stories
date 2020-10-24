import React, { useState } from 'react'
import { useThrottle } from 'bjork_react-hookup'

const Debounce = () => {
	const [ count, setCount ] = useThrottle(0)
	const [ clicked, setClicked ] = useState(0)

	return (
		<>
			<p>I'm {count}, but clicked {clicked}</p>
			<button 
				onClick={() => { 
					setCount(count+1, 1000) 
					setClicked(clicked+1)
				}}
			>
				Throttle
			</button>
		</>
	)
}

export default Debounce
