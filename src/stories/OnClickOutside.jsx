/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react'
import { useOnClickOutside, useBoolean } from 'bjork_react-hookup'

const Hover = () => {
	const [ isVisible, setIsVisible, { setTrue, setFalse } ] = useBoolean()
	const ref = useRef()
	useOnClickOutside(ref, setFalse)

	return (
		<>
			{	isVisible ? (
				<div 
					ref={ref}
					style={{
						display: "block",
						width: "200px",
						wrap: 'nowrap',
						backgroundColor: "black",
						color: "whitesmoke",
						padding: '20px',
					}}
				>
					👋 Click anywhere outside of me to close
				</div>
			) : (
				<button onClick={setTrue}>Show</button>
			) }
		</>
	)
}

export default Hover
