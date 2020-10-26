import React from 'react'
import { useHover } from 'bjork_react-hookup'
import Hover from './Hover'

const HoverContainer = () => {
	const [ isHover, bind ] = useHover() 

	return <Hover props={{ isHover, bind }} />
}

export default HoverContainer
