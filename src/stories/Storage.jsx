import React from 'react'
import { useStorage } from 'bjork_react-hookup'

const Storage = () => {
	const [ state, setState ] = useStorage( 'local', 'value' )

	return (
		<>
			<p>{ !state ? '💀 Empty' : `😎 Stored : ${state}` }</p>
			<input 
				onChange={e => setState(e.target.value)}
				value={state}
			></input>
		</>
	)
}

export default Storage
