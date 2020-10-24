import { useAsync } from 'bjork_react-hookup'
import React from 'react'

const delayedValue = () => (
	new Promise((resolve, reject) => {
		setTimeout(()=> {
			let number  = Math.floor(Math.random() * 10)
			number >= 5 ? resolve('🤯') : reject('🤬')
		}, 2000)
	})
)
 
const Async = () => {
	const [ state, execute ] = useAsync(delayedValue, false)

	const { pending, value, error } = state

	return (
		<div>
			<p>{ value ? value : error ? error : '🏜'}</p>

			<button 
				onClick={() => !pending ? execute() : ''}
			>{ pending ? 'pending ...' : 'fetch' }</button>
		</div>
	)
}

export default Async
