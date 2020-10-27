import React from 'react'
import { useActive } from 'bjork_react-hookup'
import Active from './Active'

const ActiveContainer = () => {
	const [ isActive, bind ] = useActive()

	return <Active props={{ isActive, bind }} />
}

export default ActiveContainer
