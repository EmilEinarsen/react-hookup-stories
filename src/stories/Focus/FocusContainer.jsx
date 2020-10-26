import React from 'react'
import { useFocus } from 'bjork_react-hookup'
import Focus from './Focus'

const FocusContainer = () => {
	const [ isFocus, bind ] = useFocus()

	return <Focus props={{ isFocus, bind }} />
}

export default FocusContainer
