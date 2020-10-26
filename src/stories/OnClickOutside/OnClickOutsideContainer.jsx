/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react'
import { useOnClickOutside, useBoolean } from 'bjork_react-hookup'
import OnClickOutside from './OnClickOutside'

const OnClickOutsideContainer = () => {
	const [ isVisible, , { setTrue, setFalse } ] = useBoolean()
	const ref = useRef()
	useOnClickOutside(ref, setFalse)

	return <OnClickOutside props={{ ref, isVisible, setTrue }} />
}

export default OnClickOutsideContainer