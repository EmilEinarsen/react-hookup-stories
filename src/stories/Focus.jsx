import React from 'react'
import { useFocus } from 'bjork_react-hookup'

const Focus = () => {
	const [ isFocus, bind ] = useFocus()

	return (
		<>
			<p>{isFocus ? '😁' : '☹️'}</p>
			<input {...bind} ></input>
		</>
	)
}

export default Focus
