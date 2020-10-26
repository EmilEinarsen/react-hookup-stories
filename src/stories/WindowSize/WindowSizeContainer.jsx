import React from 'react'
import { useWindowSize } from 'bjork_react-hookup'
import WindowSize from './WindowSize'

const WindowSizeContainer = () => {
	const [ size ] = useWindowSize()

	return <WindowSize props={{ size }} />
}

export default WindowSizeContainer
