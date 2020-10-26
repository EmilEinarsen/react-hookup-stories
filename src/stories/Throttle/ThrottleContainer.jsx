import React, { useState } from 'react'
import { useThrottle } from 'bjork_react-hookup'
import Throttle from './Throttle'

const ThrottleContainer = () => {
	const [ count, setCount ] = useThrottle(0)
	const [ clicked, setClicked ] = useState(0)

	return <Throttle props={{ count, setCount, clicked, setClicked }} />
}

export default ThrottleContainer
