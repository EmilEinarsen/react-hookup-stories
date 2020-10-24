import React from 'react'
import { useBoolean } from 'bjork_react-hookup'

const Button = () => {
	const [ state, setState, { toggle, setTrue, setFalse } ] = useBoolean(false)

	return (
		<>
			<p>{state ? '😁' : '☹️'}</p>
			<button onClick={toggle}>TOGGLE</button>
			<button onClick={setTrue}>TRUE</button>
			<button onClick={setFalse}>FALSE</button>
		</>
	)
}

export default Button
