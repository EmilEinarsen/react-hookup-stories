import React from 'react'
import { useBoolean } from 'bjork_react-hookup'
import Boolean from './Boolean'

const BooleanContainer = () => {
	const [ state, , { toggle, setTrue, setFalse } ] = useBoolean(false)

	return <Boolean props={{state, toggle, setTrue, setFalse}} />
}

export default BooleanContainer
