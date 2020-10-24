import React from 'react'
import { useField } from 'bjork_react-hookup'

const Field = () => {
	const [ state, setState, bind ] = useField()

	return (
		<>
			<p>{ !state ? '💀 Empty' : `😎 Value: ${state}` }</p>
			<input {...bind}></input>
		</>
	)
}

export default Field