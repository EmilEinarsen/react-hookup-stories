import React from 'react'
import { useField } from 'bjork_react-hookup'
import Field from './Field'

const FieldContainer = () => {
	const [ state, , bind ] = useField()

	return <Field props={{state, bind}} />
}

export default FieldContainer