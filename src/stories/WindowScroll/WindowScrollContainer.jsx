import React from 'react'
import { useWindowScroll } from 'bjork_react-hookup'
import WindowScroll from './WindowScroll'

const WindowScrollContainer = () => {
	const [ state ] = useWindowScroll()

	return <WindowScroll props={{ state }} />
}

export default WindowScrollContainer
