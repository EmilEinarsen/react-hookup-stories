import React, { useEffect } from 'react'
import { useWindowScroll } from 'bjork_react-hookup'

const style = {
	display: 'block',
	backgroundColor: "black",
	color: 'whitesmoke',
	padding: '20px',
	width: '250px',
	position: 'fixed',
	top: '0',
	right: '0',
}

const WindowScroll = () => {
	const [ state ] = useWindowScroll()
	const { x, y } = state

	useEffect(() => {
		console.log(state)
	}, [state]);

	return (
		<div style={style}>
			Your scroll position is X:{Math.floor(x)}, Y:{Math.floor(y)}
		</div>
	)
}

export default WindowScroll
