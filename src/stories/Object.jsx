import React from 'react'
import { useObject } from 'bjork_react-hookup'

const Object_ = () => {
	const [ 
		object, setObject, { add, clear, removeByKey, removeByValue }
	] = useObject({ name: 'Emil', age: 20, school: 'Osbeck' })
	
	const {name, age, school, ...obj} = object

	return (
		<>
			{ Object.keys(object).length ? (
				<p>{name ? `My name is ${name}. ` : ''}{age ? `I'm ${age} years old. ` : ''}Currently studying at {school}</p>
			) : (
				<p>Nothing here</p>
			)}
			<button onClick={() => add({school: 'Kattegatt'})}>
				Update school
			</button>
			<button onClick={() => removeByKey('age')}>
				Remove age
			</button>
			<button onClick={() => clear()}>
				Go incognito
			</button>
		</>
	)
}

export default Object_