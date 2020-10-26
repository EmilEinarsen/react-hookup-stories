import React from 'react'
import { useAsync } from 'bjork_react-hookup'
import Async from './Async'

const delayedValue = () => (
	new Promise((resolve, reject) => {
		setTimeout(()=> {
			let number  = Math.floor(Math.random() * 10)
			number >= 3 ? resolve('🤯') : reject('🤬')
		}, 2000)
	})
)
 
const AsyncContainer = () => {
	const [ { pending, value, error }, execute ] = useAsync(delayedValue, false)

	return <Async props={{ pending, value, error, execute }} />
}

export default AsyncContainer