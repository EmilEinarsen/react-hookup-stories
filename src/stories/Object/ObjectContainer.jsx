import React from 'react'
import { useObject } from 'bjork_react-hookup'
import OBJECT from './Object'

const ObjectContainer = () => {
	const [ 
		object, , { add, clear, removeByKey }
	] = useObject({ name: 'Bjork', age: 1, country: 'sweden' })

	return <OBJECT props={{ object, add, clear, removeByKey }} />
}

export default ObjectContainer